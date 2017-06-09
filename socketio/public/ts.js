var TS = TS || {version: '0.0.1', messageIdToTypeName: null};

TS.MESSAGE_TYPE = {
	"ERROR":-1,
	"NOOP":0,
	"PING":1,
	"LOGIN":2,
	"LOGOUT":3,
	"JOIN_ROOM":4,
	"LEAVE_ROOM":5,
	"CHAT_MESSAGE":6
};

TS.Message = function(type, payload) {
	this.type = type || 0;
	this.payload = payload || {};
};


TS.GetMessageType = function(type) {
	if(!TS.messageIdToTypeName) {
		TS.messageIdToTypeName = {};
		for(var mtName in TS.MESSAGE_TYPE) {
			TS.messageIdToTypeName[TS.MESSAGE_TYPE[mtName]] = mtName;
		}
	}
	return TS.messageIdToTypeName[type];
};

var module = module || {};
module.exports = TS;