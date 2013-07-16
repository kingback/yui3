if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/button-group/button-group.js']) {
   __coverage__['build/button-group/button-group.js'] = {"path":"build/button-group/button-group.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":43}}},"2":{"name":"ButtonGroup","line":22,"loc":{"start":{"line":22,"column":0},"end":{"line":22,"column":23}}},"3":{"name":"(anonymous_3)","line":34,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":25}}},"4":{"name":"(anonymous_4)","line":43,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":23}}},"5":{"name":"(anonymous_5)","line":51,"loc":{"start":{"line":51,"column":26},"end":{"line":51,"column":38}}},"6":{"name":"(anonymous_6)","line":60,"loc":{"start":{"line":60,"column":16},"end":{"line":60,"column":27}}},"7":{"name":"(anonymous_7)","line":71,"loc":{"start":{"line":71,"column":24},"end":{"line":71,"column":35}}},"8":{"name":"(anonymous_8)","line":77,"loc":{"start":{"line":77,"column":21},"end":{"line":77,"column":35}}},"9":{"name":"(anonymous_9)","line":91,"loc":{"start":{"line":91,"column":23},"end":{"line":91,"column":34}}},"10":{"name":"(anonymous_10)","line":96,"loc":{"start":{"line":96,"column":31},"end":{"line":96,"column":45}}},"11":{"name":"(anonymous_11)","line":110,"loc":{"start":{"line":110,"column":18},"end":{"line":110,"column":29}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":191,"column":72}},"2":{"start":{"line":10,"column":0},"end":{"line":12,"column":43}},"3":{"start":{"line":22,"column":0},"end":{"line":24,"column":1}},"4":{"start":{"line":23,"column":4},"end":{"line":23,"column":62}},"5":{"start":{"line":27,"column":0},"end":{"line":188,"column":3}},"6":{"start":{"line":35,"column":8},"end":{"line":35,"column":48}},"7":{"start":{"line":44,"column":8},"end":{"line":45,"column":40}},"8":{"start":{"line":47,"column":8},"end":{"line":47,"column":91}},"9":{"start":{"line":48,"column":8},"end":{"line":48,"column":66}},"10":{"start":{"line":52,"column":8},"end":{"line":52,"column":63}},"11":{"start":{"line":61,"column":8},"end":{"line":61,"column":39}},"12":{"start":{"line":63,"column":8},"end":{"line":63,"column":53}},"13":{"start":{"line":72,"column":8},"end":{"line":75,"column":61}},"14":{"start":{"line":77,"column":8},"end":{"line":81,"column":11}},"15":{"start":{"line":78,"column":12},"end":{"line":80,"column":13}},"16":{"start":{"line":79,"column":16},"end":{"line":79,"column":36}},"17":{"start":{"line":83,"column":8},"end":{"line":83,"column":24}},"18":{"start":{"line":92,"column":8},"end":{"line":94,"column":18}},"19":{"start":{"line":96,"column":8},"end":{"line":99,"column":11}},"20":{"start":{"line":97,"column":12},"end":{"line":97,"column":38}},"21":{"start":{"line":98,"column":12},"end":{"line":98,"column":31}},"22":{"start":{"line":101,"column":8},"end":{"line":101,"column":22}},"23":{"start":{"line":111,"column":8},"end":{"line":116,"column":20}},"24":{"start":{"line":119,"column":8},"end":{"line":134,"column":9}},"25":{"start":{"line":120,"column":12},"end":{"line":120,"column":64}},"26":{"start":{"line":127,"column":12},"end":{"line":127,"column":60}},"27":{"start":{"line":129,"column":13},"end":{"line":134,"column":9}},"28":{"start":{"line":130,"column":12},"end":{"line":130,"column":41}},"29":{"start":{"line":131,"column":12},"end":{"line":131,"column":47}},"30":{"start":{"line":132,"column":12},"end":{"line":132,"column":48}},"31":{"start":{"line":133,"column":12},"end":{"line":133,"column":60}}},"branchMap":{"1":{"line":78,"type":"if","locations":[{"start":{"line":78,"column":12},"end":{"line":78,"column":12}},{"start":{"line":78,"column":12},"end":{"line":78,"column":12}}]},"2":{"line":119,"type":"if","locations":[{"start":{"line":119,"column":8},"end":{"line":119,"column":8}},{"start":{"line":119,"column":8},"end":{"line":119,"column":8}}]},"3":{"line":129,"type":"if","locations":[{"start":{"line":129,"column":13},"end":{"line":129,"column":13}},{"start":{"line":129,"column":13},"end":{"line":129,"column":13}}]},"4":{"line":129,"type":"binary-expr","locations":[{"start":{"line":129,"column":17},"end":{"line":129,"column":33}},{"start":{"line":129,"column":37},"end":{"line":129,"column":48}}]}},"code":["(function () { YUI.add('button-group', function (Y, NAME) {","","/**"," * A Widget to create groups of buttons"," *"," * @module button-group"," * @since 3.5.0"," */","","var CONTENT_BOX = \"contentBox\",","    CLICK_EVENT = \"click\",","    CLASS_NAMES = Y.ButtonCore.CLASS_NAMES;","","/**"," * Creates a ButtonGroup"," *"," * @class ButtonGroup"," * @extends Widget"," * @param config {Object} Configuration object"," * @constructor"," */","function ButtonGroup() {","    ButtonGroup.superclass.constructor.apply(this, arguments);","}","","/* ButtonGroup extends Widget */","Y.ButtonGroup = Y.extend(ButtonGroup, Y.Widget, {","","    /**","     * @method renderUI","     * @description Creates a visual representation of the widget based on existing parameters.","     * @public","     */","    renderUI: function() {","        this.getButtons().plug(Y.Plugin.Button);","    },","","    /**","     * @method bindUI","     * @description Hooks up events for the widget","     * @public","     */","    bindUI: function() {","        var group = this,","            cb = group.get(CONTENT_BOX);","","        cb.delegate(CLICK_EVENT, group._handleClick, Y.ButtonGroup.BUTTON_SELECTOR, group);","        group.after('disabledChange', group._afterDisabledChange);","    },","","    _afterDisabledChange: function () {","        this.getButtons().each(Y.ButtonCore.prototype.disable);","    },","","    /**","     * @method getButtons","     * @description Returns all buttons inside this this button group","     * @public","     */","    getButtons: function() {","        var cb = this.get(CONTENT_BOX);","","        return cb.all(Y.ButtonGroup.BUTTON_SELECTOR);","    },","","    /**","     * @method getSelectedButtons","     * @description Returns all Y.Buttons instances that are selected","     * @public","     */","    getSelectedButtons: function() {","        var group = this,","            selected = [],","            buttons = group.getButtons(),","            selectedClass = ButtonGroup.CLASS_NAMES.SELECTED;","","        buttons.each(function(node){","            if (node.hasClass(selectedClass)){","                selected.push(node);","            }","        });","","        return selected;","    },","","    /**","     * @method getSelectedValues","     * @description Returns the values of all Y.Button instances that are selected","     * @public","     */","    getSelectedValues: function() {","        var selected = this.getSelectedButtons(),","            values = [],","            value;","","        Y.Array.each(selected, function(node){","            value = node.getContent();","            values.push(value);","        });","","        return values;","    },","","    /**","     * @method _handleClick","     * @description A delegated click handler for when any button is clicked in the content box","     * @param e {Object} An event object","     * @private","     */","    _handleClick: function(e){","        var group = this,","            clickedNode = e.target.ancestor('.' + ButtonGroup.CLASS_NAMES.BUTTON, true),","            type = group.get('type'),","            selectedClass = ButtonGroup.CLASS_NAMES.SELECTED,","            isSelected = clickedNode.hasClass(selectedClass),","            buttons;","","        // TODO: Anything for 'push' groups?","        if (type === 'checkbox') {","            clickedNode.toggleClass(selectedClass, !isSelected);","            /**","             * @event selectionChange","             * @description fires when any button in the group changes its checked status","             * @param {Event} the event object. It contains an \"originEvent\" property","             * linking to the original DOM event that triggered the selection change","             */","            group.fire('selectionChange', {originEvent: e});","        }","        else if (type === 'radio' && !isSelected) {","            buttons = group.getButtons(); // Todo: getSelectedButtons()? Need it to return an arraylist then.","            buttons.removeClass(selectedClass);","            clickedNode.addClass(selectedClass);","            group.fire('selectionChange', {originEvent: e});","        }","    }","","}, {","    // Y.ButtonGroup static properties","","    /**","     * The identity of the widget.","     *","     * @property NAME","     * @type {String}","     * @default 'buttongroup'","     * @readOnly","     * @protected","     * @static","     */","    NAME: 'buttongroup',","","    /**","     * Static property used to define the default attribute configuration of","     * the Widget.","     *","     * @property ATTRS","     * @type {Object}","     * @protected","     * @static","     */","    ATTRS: {","","        /**","         * @attribute type","         * @type String","         */","        type: {","            writeOnce: 'initOnly',","            value: 'radio'","        }","    },","","    /**","     * List of class names to use for ButtonGroups","     *","     * @property CLASS_NAMES","     * @type {Object}","     * @static","     */","    CLASS_NAMES: CLASS_NAMES,","    ","    /**","     * Selector used to find buttons inside a ButtonGroup","     * @property BUTTON_SELECTOR","     * @type {String}","     */","    BUTTON_SELECTOR: \"button, input[type=button], input[type=reset], input[type=submit], input[type=radio], input[type=checkbox]\"","});","","","}, '@VERSION@', {\"requires\": [\"button-plugin\", \"cssbutton\", \"widget\"]});","","}());"]};
}
var __cov_9qC8lVC9vy45zUiGCHBwMA = __coverage__['build/button-group/button-group.js'];
__cov_9qC8lVC9vy45zUiGCHBwMA.s['1']++;YUI.add('button-group',function(Y,NAME){__cov_9qC8lVC9vy45zUiGCHBwMA.f['1']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['2']++;var CONTENT_BOX='contentBox',CLICK_EVENT='click',CLASS_NAMES=Y.ButtonCore.CLASS_NAMES;function ButtonGroup(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['2']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['4']++;ButtonGroup.superclass.constructor.apply(this,arguments);}__cov_9qC8lVC9vy45zUiGCHBwMA.s['5']++;Y.ButtonGroup=Y.extend(ButtonGroup,Y.Widget,{renderUI:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['3']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['6']++;this.getButtons().plug(Y.Plugin.Button);},bindUI:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['4']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['7']++;var group=this,cb=group.get(CONTENT_BOX);__cov_9qC8lVC9vy45zUiGCHBwMA.s['8']++;cb.delegate(CLICK_EVENT,group._handleClick,Y.ButtonGroup.BUTTON_SELECTOR,group);__cov_9qC8lVC9vy45zUiGCHBwMA.s['9']++;group.after('disabledChange',group._afterDisabledChange);},_afterDisabledChange:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['5']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['10']++;this.getButtons().each(Y.ButtonCore.prototype.disable);},getButtons:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['6']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['11']++;var cb=this.get(CONTENT_BOX);__cov_9qC8lVC9vy45zUiGCHBwMA.s['12']++;return cb.all(Y.ButtonGroup.BUTTON_SELECTOR);},getSelectedButtons:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['7']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['13']++;var group=this,selected=[],buttons=group.getButtons(),selectedClass=ButtonGroup.CLASS_NAMES.SELECTED;__cov_9qC8lVC9vy45zUiGCHBwMA.s['14']++;buttons.each(function(node){__cov_9qC8lVC9vy45zUiGCHBwMA.f['8']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['15']++;if(node.hasClass(selectedClass)){__cov_9qC8lVC9vy45zUiGCHBwMA.b['1'][0]++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['16']++;selected.push(node);}else{__cov_9qC8lVC9vy45zUiGCHBwMA.b['1'][1]++;}});__cov_9qC8lVC9vy45zUiGCHBwMA.s['17']++;return selected;},getSelectedValues:function(){__cov_9qC8lVC9vy45zUiGCHBwMA.f['9']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['18']++;var selected=this.getSelectedButtons(),values=[],value;__cov_9qC8lVC9vy45zUiGCHBwMA.s['19']++;Y.Array.each(selected,function(node){__cov_9qC8lVC9vy45zUiGCHBwMA.f['10']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['20']++;value=node.getContent();__cov_9qC8lVC9vy45zUiGCHBwMA.s['21']++;values.push(value);});__cov_9qC8lVC9vy45zUiGCHBwMA.s['22']++;return values;},_handleClick:function(e){__cov_9qC8lVC9vy45zUiGCHBwMA.f['11']++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['23']++;var group=this,clickedNode=e.target.ancestor('.'+ButtonGroup.CLASS_NAMES.BUTTON,true),type=group.get('type'),selectedClass=ButtonGroup.CLASS_NAMES.SELECTED,isSelected=clickedNode.hasClass(selectedClass),buttons;__cov_9qC8lVC9vy45zUiGCHBwMA.s['24']++;if(type==='checkbox'){__cov_9qC8lVC9vy45zUiGCHBwMA.b['2'][0]++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['25']++;clickedNode.toggleClass(selectedClass,!isSelected);__cov_9qC8lVC9vy45zUiGCHBwMA.s['26']++;group.fire('selectionChange',{originEvent:e});}else{__cov_9qC8lVC9vy45zUiGCHBwMA.b['2'][1]++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['27']++;if((__cov_9qC8lVC9vy45zUiGCHBwMA.b['4'][0]++,type==='radio')&&(__cov_9qC8lVC9vy45zUiGCHBwMA.b['4'][1]++,!isSelected)){__cov_9qC8lVC9vy45zUiGCHBwMA.b['3'][0]++;__cov_9qC8lVC9vy45zUiGCHBwMA.s['28']++;buttons=group.getButtons();__cov_9qC8lVC9vy45zUiGCHBwMA.s['29']++;buttons.removeClass(selectedClass);__cov_9qC8lVC9vy45zUiGCHBwMA.s['30']++;clickedNode.addClass(selectedClass);__cov_9qC8lVC9vy45zUiGCHBwMA.s['31']++;group.fire('selectionChange',{originEvent:e});}else{__cov_9qC8lVC9vy45zUiGCHBwMA.b['3'][1]++;}}}},{NAME:'buttongroup',ATTRS:{type:{writeOnce:'initOnly',value:'radio'}},CLASS_NAMES:CLASS_NAMES,BUTTON_SELECTOR:'button, input[type=button], input[type=reset], input[type=submit], input[type=radio], input[type=checkbox]'});},'@VERSION@',{'requires':['button-plugin','cssbutton','widget']});
