"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _FieldTypes = require("./decorators/FieldTypes");

var _Module = require("./Module");

var _class, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

const groupConfig = {
  name: 'Group',
  collection: 'data.Group',
  label: {
    en: 'Group',
    pt_BR: 'Grupo'
  },
  plurals: {
    en: 'Groups',
    pt_BR: 'Grupos'
  }
};
let Group = (_class = class Group extends _Module.Module {
  constructor(data) {
    super(groupConfig, data);

    _initializerDefineProperty(this, "code", _descriptor, this);

    _initializerDefineProperty(this, "name", _descriptor2, this);

    _initializerDefineProperty(this, "active", _descriptor3, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "code", [_FieldTypes.AutoNumberField], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_FieldTypes.TextField], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "active", [_FieldTypes.BooleanField], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);
exports.Group = Group;