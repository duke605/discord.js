"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EvaluatedPermissions = (function () {
	function EvaluatedPermissions(data) {
		_classCallCheck(this, EvaluatedPermissions);

		var self = this;

		this.packed = data;

		if (this.getBit(3)) this.packed = 4294967295;
	}

	EvaluatedPermissions.prototype.serialise = function serialise() {
		return {
			createInstantInvite: this.createInstantInvite,
			manageRoles: this.manageRoles,
			manageChannels: this.manageChannels,
			readMessages: this.readMessages,
			sendMessages: this.sendMessage,
			sendTTSMessages: this.sendTTSMessages,
			manageMessages: this.manageMessages,
			embedLinks: this.embedLinks,
			attachFiles: this.attachFiles,
			readMessageHistory: this.readMessageHistory,
			mentionEveryone: this.mentionEveryone,
			voiceConnect: this.voiceConnect,
			voiceSpeak: this.voiceSpeak,
			voiceMuteMembers: this.voiceMuteMembers,
			voiceDeafenMembers: this.voiceDeafenMembers,
			voiceMoveMember: this.voiceMoveMembers,
			voiceUseVoiceActivation: this.voiceUseVoiceActivation
		};
	};

	EvaluatedPermissions.prototype.getBit = function getBit(x) {
		if ((this.packed >>> 3 & 1) === 1) {
			return true;
		}
		return (this.packed >>> x & 1) === 1;
	};

	EvaluatedPermissions.prototype.setBit = function setBit(location, value) {

		if (value) {
			// allow that permission
			this.packed |= 1 << location;
		} else {
			// not allowed
			this.packed &= 1 << location;
		}
	};

	_createClass(EvaluatedPermissions, [{
		key: "createInstantInvite",
		get: function get() {
			return this.getBit(0);
		},
		set: function set(val) {
			this.setBit(0, val);
		}
	}, {
		key: "manageRoles",
		get: function get() {
			return this.getBit(3);
		},
		set: function set(val) {
			this.setBit(3, val);
		}
	}, {
		key: "manageChannels",
		get: function get() {
			return this.getBit(4);
		},
		set: function set(val) {
			this.setBit(4, val);
		}
	}, {
		key: "readMessages",
		get: function get() {
			return this.getBit(10);
		},
		set: function set(val) {
			this.setBit(10, val);
		}
	}, {
		key: "sendMessages",
		get: function get() {
			return this.getBit(11);
		},
		set: function set(val) {
			this.setBit(11, val);
		}
	}, {
		key: "sendTTSMessages",
		get: function get() {
			return this.getBit(12);
		},
		set: function set(val) {
			this.setBit(12, val);
		}
	}, {
		key: "manageMessages",
		get: function get() {
			return this.getBit(13);
		},
		set: function set(val) {
			this.setBit(13, val);
		}
	}, {
		key: "embedLinks",
		get: function get() {
			return this.getBit(14);
		},
		set: function set(val) {
			this.setBit(14, val);
		}
	}, {
		key: "attachFiles",
		get: function get() {
			return this.getBit(15);
		},
		set: function set(val) {
			this.setBit(15, val);
		}
	}, {
		key: "readMessageHistory",
		get: function get() {
			return this.getBit(16);
		},
		set: function set(val) {
			this.setBit(16, val);
		}
	}, {
		key: "mentionEveryone",
		get: function get() {
			return this.getBit(17);
		},
		set: function set(val) {
			this.setBit(17, val);
		}
	}, {
		key: "voiceConnect",
		get: function get() {
			return this.getBit(20);
		},
		set: function set(val) {
			this.setBit(20, val);
		}
	}, {
		key: "voiceSpeak",
		get: function get() {
			return this.getBit(21);
		},
		set: function set(val) {
			this.setBit(21, val);
		}
	}, {
		key: "voiceMuteMembers",
		get: function get() {
			return this.getBit(22);
		},
		set: function set(val) {
			this.setBit(22, val);
		}
	}, {
		key: "voiceDeafenMembers",
		get: function get() {
			return this.getBit(23);
		},
		set: function set(val) {
			this.setBit(23, val);
		}
	}, {
		key: "voiceMoveMembers",
		get: function get() {
			return this.getBit(24);
		},
		set: function set(val) {
			this.setBit(24, val);
		}
	}, {
		key: "voiceUseVoiceActivation",
		get: function get() {
			return this.getBit(25);
		},
		set: function set(val) {
			this.setBit(25, val);
		}
	}]);

	return EvaluatedPermissions;
})();

module.exports = EvaluatedPermissions;