SOAPUtil = {
    buildXMLData : function(methodName, params) {
        var xml = '';
        for (var p in params) {
            var val = params[p].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            xml += "<" + p + " xmlns=\"\">" + val + "</" + p + ">";
        };
        var result = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" +
                "<soap:Envelope " +
                "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" " +
                "xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" " +
                "xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">" +
                "<soap:Body>" +
                "<" + methodName + " xmlns=\"\">" +
                xml +
                "</" + methodName + "></soap:Body></soap:Envelope>";
        return result;
    }
};
Ext.define('Ext.data.proxy.SOAP', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.soap',
    methodName: '',
    params:{},

    constructor: function(config){
        var me = this;
        config = config || {};
        me.autoAppendParams = false;
        me.callParent([config]);
        me.methodName = config.methodName;
        me.url = config.url;
    },

    doRequest: function(operation, callback, scope) {
        var writer  = this.getWriter(),
            request = this.buildRequest(operation, callback, scope);
            
        if (operation.allowWrite()) {
            request = writer.write(request);
        }

        Ext.apply(request, {
            headers       : this.headers,
            timeout       : this.timeout,
            scope         : this,
            callback      : this.createRequestCallback(request, operation, callback, scope),
            method        : 'post',
            params        : {},
            xmlData       : SOAPUtil.buildXMLData(this.methodName, this.params),
            url           : this.url
        });
        Ext.Ajax.request(request);
        return request;
    },
    
    getReader: function(){
        var me = this,
            reader = me.reader,
            model = me.associatedModel;

        if (reader) {
            if (Ext.isString(reader)) {
                reader = {
                    type: reader
                };
            }
            if (reader.isReader) {
                reader.setModel(model);
            } else {
                Ext.applyIf(reader, {
                    model: model,
                    type : me.defaultReaderType
                });
            }
            me.reader = Ext.createByAlias('reader.' + reader.type, reader);
            me.reader.methodName = me.methodName;
        }
        return me.reader || null;
    }
    
});
Ext.DomQuery.isXml = function(el) {
    return (el ? el.ownerDocument || el : 0).documentElement ? true : false;
};
Ext.define("Ext.data.reader.SOAP", {
    alias : 'reader.soap',
    extend: 'Ext.data.reader.Json',
    getResponseData: function(response) {
        var jsonData = '{}';
        var resTxt = response.responseText;
        Ext.define('SOAPResult', {
            extend: 'Ext.data.Model',
            fields: ['return']
        });        
        var r = Ext.create('Ext.data.reader.Xml', {
            model : 'SOAPResult',
            root: 'Body',
            record: this.methodName + 'Response'
        });
        //var d = reader.getData(resTxt);
        var d = r.read(response);
        if (d && d.count > 0) {
            response.responseText = d.records[0].data.return;
        }
        return this.callParent([response]);
    }
});

