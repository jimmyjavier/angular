import { isPresent } from 'angular2/src/facade/lang';
import { DebugNode, DebugElement, EventListener, getDebugNode, indexDebugNode, removeDebugNodeFromIndex } from 'angular2/src/core/debug/debug_node';
export class DebugDomRootRenderer {
    constructor(_delegate) {
        this._delegate = _delegate;
    }
    renderComponent(componentProto) {
        return new DebugDomRenderer(this, this._delegate.renderComponent(componentProto));
    }
}
export class DebugDomRenderer {
    constructor(_rootRenderer, _delegate) {
        this._rootRenderer = _rootRenderer;
        this._delegate = _delegate;
    }
    renderComponent(componentType) {
        return this._rootRenderer.renderComponent(componentType);
    }
    selectRootElement(selector) {
        var nativeEl = this._delegate.selectRootElement(selector);
        var debugEl = new DebugElement(nativeEl, null);
        indexDebugNode(debugEl);
        return nativeEl;
    }
    createElement(parentElement, name) {
        var nativeEl = this._delegate.createElement(parentElement, name);
        var debugEl = new DebugElement(nativeEl, getDebugNode(parentElement));
        debugEl.name = name;
        indexDebugNode(debugEl);
        return nativeEl;
    }
    createViewRoot(hostElement) { return this._delegate.createViewRoot(hostElement); }
    createTemplateAnchor(parentElement) {
        var comment = this._delegate.createTemplateAnchor(parentElement);
        var debugEl = new DebugNode(comment, getDebugNode(parentElement));
        indexDebugNode(debugEl);
        return comment;
    }
    createText(parentElement, value) {
        var text = this._delegate.createText(parentElement, value);
        var debugEl = new DebugNode(text, getDebugNode(parentElement));
        indexDebugNode(debugEl);
        return text;
    }
    projectNodes(parentElement, nodes) {
        var debugParent = getDebugNode(parentElement);
        if (isPresent(debugParent) && debugParent instanceof DebugElement) {
            let debugElement = debugParent;
            nodes.forEach((node) => { debugElement.addChild(getDebugNode(node)); });
        }
        this._delegate.projectNodes(parentElement, nodes);
    }
    attachViewAfter(node, viewRootNodes) {
        var debugNode = getDebugNode(node);
        if (isPresent(debugNode)) {
            var debugParent = debugNode.parent;
            if (viewRootNodes.length > 0 && isPresent(debugParent)) {
                var debugViewRootNodes = [];
                viewRootNodes.forEach((rootNode) => debugViewRootNodes.push(getDebugNode(rootNode)));
                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
            }
        }
        this._delegate.attachViewAfter(node, viewRootNodes);
    }
    detachView(viewRootNodes) {
        viewRootNodes.forEach((node) => {
            var debugNode = getDebugNode(node);
            if (isPresent(debugNode) && isPresent(debugNode.parent)) {
                debugNode.parent.removeChild(debugNode);
            }
        });
        this._delegate.detachView(viewRootNodes);
    }
    destroyView(hostElement, viewAllNodes) {
        viewAllNodes.forEach((node) => { removeDebugNodeFromIndex(getDebugNode(node)); });
        this._delegate.destroyView(hostElement, viewAllNodes);
    }
    listen(renderElement, name, callback) {
        var debugEl = getDebugNode(renderElement);
        if (isPresent(debugEl)) {
            debugEl.listeners.push(new EventListener(name, callback));
        }
        return this._delegate.listen(renderElement, name, callback);
    }
    listenGlobal(target, name, callback) {
        return this._delegate.listenGlobal(target, name, callback);
    }
    setElementProperty(renderElement, propertyName, propertyValue) {
        var debugEl = getDebugNode(renderElement);
        if (isPresent(debugEl) && debugEl instanceof DebugElement) {
            debugEl.properties.set(propertyName, propertyValue);
        }
        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
    }
    setElementAttribute(renderElement, attributeName, attributeValue) {
        var debugEl = getDebugNode(renderElement);
        if (isPresent(debugEl) && debugEl instanceof DebugElement) {
            debugEl.attributes.set(attributeName, attributeValue);
        }
        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
    }
    /**
     * Used only in debug mode to serialize property changes to comment nodes,
     * such as <template> placeholders.
     */
    setBindingDebugInfo(renderElement, propertyName, propertyValue) {
        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    }
    /**
     * Used only in development mode to set information needed by the DebugNode for this element.
     */
    setElementDebugInfo(renderElement, info) {
        var debugEl = getDebugNode(renderElement);
        debugEl.setDebugInfo(info);
        this._delegate.setElementDebugInfo(renderElement, info);
    }
    setElementClass(renderElement, className, isAdd) {
        this._delegate.setElementClass(renderElement, className, isAdd);
    }
    setElementStyle(renderElement, styleName, styleValue) {
        this._delegate.setElementStyle(renderElement, styleName, styleValue);
    }
    invokeElementMethod(renderElement, methodName, args) {
        this._delegate.invokeElementMethod(renderElement, methodName, args);
    }
    setText(renderNode, text) { this._delegate.setText(renderNode, text); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWdfcmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUpnMGNYVkJmLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9kZWJ1Zy9kZWJ1Z19yZW5kZXJlci50cyJdLCJuYW1lcyI6WyJEZWJ1Z0RvbVJvb3RSZW5kZXJlciIsIkRlYnVnRG9tUm9vdFJlbmRlcmVyLmNvbnN0cnVjdG9yIiwiRGVidWdEb21Sb290UmVuZGVyZXIucmVuZGVyQ29tcG9uZW50IiwiRGVidWdEb21SZW5kZXJlciIsIkRlYnVnRG9tUmVuZGVyZXIuY29uc3RydWN0b3IiLCJEZWJ1Z0RvbVJlbmRlcmVyLnJlbmRlckNvbXBvbmVudCIsIkRlYnVnRG9tUmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQiLCJEZWJ1Z0RvbVJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQiLCJEZWJ1Z0RvbVJlbmRlcmVyLmNyZWF0ZVZpZXdSb290IiwiRGVidWdEb21SZW5kZXJlci5jcmVhdGVUZW1wbGF0ZUFuY2hvciIsIkRlYnVnRG9tUmVuZGVyZXIuY3JlYXRlVGV4dCIsIkRlYnVnRG9tUmVuZGVyZXIucHJvamVjdE5vZGVzIiwiRGVidWdEb21SZW5kZXJlci5hdHRhY2hWaWV3QWZ0ZXIiLCJEZWJ1Z0RvbVJlbmRlcmVyLmRldGFjaFZpZXciLCJEZWJ1Z0RvbVJlbmRlcmVyLmRlc3Ryb3lWaWV3IiwiRGVidWdEb21SZW5kZXJlci5saXN0ZW4iLCJEZWJ1Z0RvbVJlbmRlcmVyLmxpc3Rlbkdsb2JhbCIsIkRlYnVnRG9tUmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5IiwiRGVidWdEb21SZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlIiwiRGVidWdEb21SZW5kZXJlci5zZXRCaW5kaW5nRGVidWdJbmZvIiwiRGVidWdEb21SZW5kZXJlci5zZXRFbGVtZW50RGVidWdJbmZvIiwiRGVidWdEb21SZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MiLCJEZWJ1Z0RvbVJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSIsIkRlYnVnRG9tUmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCIsIkRlYnVnRG9tUmVuZGVyZXIuc2V0VGV4dCJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7T0FPM0MsRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGFBQWEsRUFDYixZQUFZLEVBQ1osY0FBYyxFQUNkLHdCQUF3QixFQUN6QixNQUFNLG9DQUFvQztBQUUzQztJQUNFQSxZQUFvQkEsU0FBdUJBO1FBQXZCQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFjQTtJQUFHQSxDQUFDQTtJQUUvQ0QsZUFBZUEsQ0FBQ0EsY0FBbUNBO1FBQ2pERSxNQUFNQSxDQUFDQSxJQUFJQSxnQkFBZ0JBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGVBQWVBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BGQSxDQUFDQTtBQUNIRixDQUFDQTtBQUVEO0lBQ0VHLFlBQW9CQSxhQUFtQ0EsRUFBVUEsU0FBbUJBO1FBQWhFQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBc0JBO1FBQVVBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO0lBQUdBLENBQUNBO0lBRXhGRCxlQUFlQSxDQUFDQSxhQUFrQ0E7UUFDaERFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO0lBQzNEQSxDQUFDQTtJQUVERixpQkFBaUJBLENBQUNBLFFBQWdCQTtRQUNoQ0csSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsWUFBWUEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0NBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNB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LENBQUNBLG1CQUFtQkEsQ0FBQ0EsYUFBYUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDMURBLENBQUNBO0lBRURqQixlQUFlQSxDQUFDQSxhQUFrQkEsRUFBRUEsU0FBaUJBLEVBQUVBLEtBQWNBO1FBQ25Fa0IsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsYUFBYUEsRUFBRUEsU0FBU0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDbEVBLENBQUNBO0lBRURsQixlQUFlQSxDQUFDQSxhQUFrQkEsRUFBRUEsU0FBaUJBLEVBQUVBLFVBQWtCQTtRQUN2RW1CLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLGVBQWVBLENBQUNBLGFBQWFBLEVBQUVBLFNBQVNBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO0lBQ3ZFQSxDQUFDQTtJQUVEbkIsbUJBQW1CQSxDQUFDQSxhQUFrQkEsRUFBRUEsVUFBa0JBLEVBQUVBLElBQVdBO1FBQ3JFb0IsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxhQUFhQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN0RUEsQ0FBQ0E7SUFFRHBCLE9BQU9BLENBQUNBLFVBQWVBLEVBQUVBLElBQVlBLElBQUlxQixJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUN0RnJCLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7XG4gIFJlbmRlcmVyLFxuICBSb290UmVuZGVyZXIsXG4gIFJlbmRlckNvbXBvbmVudFR5cGUsXG4gIFJlbmRlckRlYnVnSW5mb1xufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7XG4gIERlYnVnTm9kZSxcbiAgRGVidWdFbGVtZW50LFxuICBFdmVudExpc3RlbmVyLFxuICBnZXREZWJ1Z05vZGUsXG4gIGluZGV4RGVidWdOb2RlLFxuICByZW1vdmVEZWJ1Z05vZGVGcm9tSW5kZXhcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGVidWcvZGVidWdfbm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBEZWJ1Z0RvbVJvb3RSZW5kZXJlciBpbXBsZW1lbnRzIFJvb3RSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RlbGVnYXRlOiBSb290UmVuZGVyZXIpIHt9XG5cbiAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFByb3RvOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXIge1xuICAgIHJldHVybiBuZXcgRGVidWdEb21SZW5kZXJlcih0aGlzLCB0aGlzLl9kZWxlZ2F0ZS5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50UHJvdG8pKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVidWdEb21SZW5kZXJlciBpbXBsZW1lbnRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm9vdFJlbmRlcmVyOiBEZWJ1Z0RvbVJvb3RSZW5kZXJlciwgcHJpdmF0ZSBfZGVsZWdhdGU6IFJlbmRlcmVyKSB7fVxuXG4gIHJlbmRlckNvbXBvbmVudChjb21wb25lbnRUeXBlOiBSZW5kZXJDb21wb25lbnRUeXBlKTogUmVuZGVyZXIge1xuICAgIHJldHVybiB0aGlzLl9yb290UmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpO1xuICB9XG5cbiAgc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIG5hdGl2ZUVsID0gdGhpcy5fZGVsZWdhdGUuc2VsZWN0Um9vdEVsZW1lbnQoc2VsZWN0b3IpO1xuICAgIHZhciBkZWJ1Z0VsID0gbmV3IERlYnVnRWxlbWVudChuYXRpdmVFbCwgbnVsbCk7XG4gICAgaW5kZXhEZWJ1Z05vZGUoZGVidWdFbCk7XG4gICAgcmV0dXJuIG5hdGl2ZUVsO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudChwYXJlbnRFbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIG5hdGl2ZUVsID0gdGhpcy5fZGVsZWdhdGUuY3JlYXRlRWxlbWVudChwYXJlbnRFbGVtZW50LCBuYW1lKTtcbiAgICB2YXIgZGVidWdFbCA9IG5ldyBEZWJ1Z0VsZW1lbnQobmF0aXZlRWwsIGdldERlYnVnTm9kZShwYXJlbnRFbGVtZW50KSk7XG4gICAgZGVidWdFbC5uYW1lID0gbmFtZTtcbiAgICBpbmRleERlYnVnTm9kZShkZWJ1Z0VsKTtcbiAgICByZXR1cm4gbmF0aXZlRWw7XG4gIH1cblxuICBjcmVhdGVWaWV3Um9vdChob3N0RWxlbWVudDogYW55KTogYW55IHsgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNyZWF0ZVZpZXdSb290KGhvc3RFbGVtZW50KTsgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlQW5jaG9yKHBhcmVudEVsZW1lbnQ6IGFueSk6IGFueSB7XG4gICAgdmFyIGNvbW1lbnQgPSB0aGlzLl9kZWxlZ2F0ZS5jcmVhdGVUZW1wbGF0ZUFuY2hvcihwYXJlbnRFbGVtZW50KTtcbiAgICB2YXIgZGVidWdFbCA9IG5ldyBEZWJ1Z05vZGUoY29tbWVudCwgZ2V0RGVidWdOb2RlKHBhcmVudEVsZW1lbnQpKTtcbiAgICBpbmRleERlYnVnTm9kZShkZWJ1Z0VsKTtcbiAgICByZXR1cm4gY29tbWVudDtcbiAgfVxuXG4gIGNyZWF0ZVRleHQocGFyZW50RWxlbWVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogYW55IHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuX2RlbGVnYXRlLmNyZWF0ZVRleHQocGFyZW50RWxlbWVudCwgdmFsdWUpO1xuICAgIHZhciBkZWJ1Z0VsID0gbmV3IERlYnVnTm9kZSh0ZXh0LCBnZXREZWJ1Z05vZGUocGFyZW50RWxlbWVudCkpO1xuICAgIGluZGV4RGVidWdOb2RlKGRlYnVnRWwpO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgcHJvamVjdE5vZGVzKHBhcmVudEVsZW1lbnQ6IGFueSwgbm9kZXM6IGFueVtdKSB7XG4gICAgdmFyIGRlYnVnUGFyZW50ID0gZ2V0RGVidWdOb2RlKHBhcmVudEVsZW1lbnQpO1xuICAgIGlmIChpc1ByZXNlbnQoZGVidWdQYXJlbnQpICYmIGRlYnVnUGFyZW50IGluc3RhbmNlb2YgRGVidWdFbGVtZW50KSB7XG4gICAgICBsZXQgZGVidWdFbGVtZW50ID0gZGVidWdQYXJlbnQ7XG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7IGRlYnVnRWxlbWVudC5hZGRDaGlsZChnZXREZWJ1Z05vZGUobm9kZSkpOyB9KTtcbiAgICB9XG4gICAgdGhpcy5fZGVsZWdhdGUucHJvamVjdE5vZGVzKHBhcmVudEVsZW1lbnQsIG5vZGVzKTtcbiAgfVxuXG4gIGF0dGFjaFZpZXdBZnRlcihub2RlOiBhbnksIHZpZXdSb290Tm9kZXM6IGFueVtdKSB7XG4gICAgdmFyIGRlYnVnTm9kZSA9IGdldERlYnVnTm9kZShub2RlKTtcbiAgICBpZiAoaXNQcmVzZW50KGRlYnVnTm9kZSkpIHtcbiAgICAgIHZhciBkZWJ1Z1BhcmVudCA9IGRlYnVnTm9kZS5wYXJlbnQ7XG4gICAgICBpZiAodmlld1Jvb3ROb2Rlcy5sZW5ndGggPiAwICYmIGlzUHJlc2VudChkZWJ1Z1BhcmVudCkpIHtcbiAgICAgICAgdmFyIGRlYnVnVmlld1Jvb3ROb2RlczogRGVidWdOb2RlW10gPSBbXTtcbiAgICAgICAgdmlld1Jvb3ROb2Rlcy5mb3JFYWNoKChyb290Tm9kZSkgPT4gZGVidWdWaWV3Um9vdE5vZGVzLnB1c2goZ2V0RGVidWdOb2RlKHJvb3ROb2RlKSkpO1xuICAgICAgICBkZWJ1Z1BhcmVudC5pbnNlcnRDaGlsZHJlbkFmdGVyKGRlYnVnTm9kZSwgZGVidWdWaWV3Um9vdE5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZGVsZWdhdGUuYXR0YWNoVmlld0FmdGVyKG5vZGUsIHZpZXdSb290Tm9kZXMpO1xuICB9XG5cbiAgZGV0YWNoVmlldyh2aWV3Um9vdE5vZGVzOiBhbnlbXSkge1xuICAgIHZpZXdSb290Tm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgdmFyIGRlYnVnTm9kZSA9IGdldERlYnVnTm9kZShub2RlKTtcbiAgICAgIGlmIChpc1ByZXNlbnQoZGVidWdOb2RlKSAmJiBpc1ByZXNlbnQoZGVidWdOb2RlLnBhcmVudCkpIHtcbiAgICAgICAgZGVidWdOb2RlLnBhcmVudC5yZW1vdmVDaGlsZChkZWJ1Z05vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2RlbGVnYXRlLmRldGFjaFZpZXcodmlld1Jvb3ROb2Rlcyk7XG4gIH1cblxuICBkZXN0cm95Vmlldyhob3N0RWxlbWVudDogYW55LCB2aWV3QWxsTm9kZXM6IGFueVtdKSB7XG4gICAgdmlld0FsbE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHsgcmVtb3ZlRGVidWdOb2RlRnJvbUluZGV4KGdldERlYnVnTm9kZShub2RlKSk7IH0pO1xuICAgIHRoaXMuX2RlbGVnYXRlLmRlc3Ryb3lWaWV3KGhvc3RFbGVtZW50LCB2aWV3QWxsTm9kZXMpO1xuICB9XG5cbiAgbGlzdGVuKHJlbmRlckVsZW1lbnQ6IGFueSwgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgdmFyIGRlYnVnRWwgPSBnZXREZWJ1Z05vZGUocmVuZGVyRWxlbWVudCk7XG4gICAgaWYgKGlzUHJlc2VudChkZWJ1Z0VsKSkge1xuICAgICAgZGVidWdFbC5saXN0ZW5lcnMucHVzaChuZXcgRXZlbnRMaXN0ZW5lcihuYW1lLCBjYWxsYmFjaykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUubGlzdGVuKHJlbmRlckVsZW1lbnQsIG5hbWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGxpc3Rlbkdsb2JhbCh0YXJnZXQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmxpc3Rlbkdsb2JhbCh0YXJnZXQsIG5hbWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRQcm9wZXJ0eShyZW5kZXJFbGVtZW50OiBhbnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBhbnkpIHtcbiAgICB2YXIgZGVidWdFbCA9IGdldERlYnVnTm9kZShyZW5kZXJFbGVtZW50KTtcbiAgICBpZiAoaXNQcmVzZW50KGRlYnVnRWwpICYmIGRlYnVnRWwgaW5zdGFuY2VvZiBEZWJ1Z0VsZW1lbnQpIHtcbiAgICAgIGRlYnVnRWwucHJvcGVydGllcy5zZXQocHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fZGVsZWdhdGUuc2V0RWxlbWVudFByb3BlcnR5KHJlbmRlckVsZW1lbnQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gIH1cblxuICBzZXRFbGVtZW50QXR0cmlidXRlKHJlbmRlckVsZW1lbnQ6IGFueSwgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKSB7XG4gICAgdmFyIGRlYnVnRWwgPSBnZXREZWJ1Z05vZGUocmVuZGVyRWxlbWVudCk7XG4gICAgaWYgKGlzUHJlc2VudChkZWJ1Z0VsKSAmJiBkZWJ1Z0VsIGluc3RhbmNlb2YgRGVidWdFbGVtZW50KSB7XG4gICAgICBkZWJ1Z0VsLmF0dHJpYnV0ZXMuc2V0KGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fZGVsZWdhdGUuc2V0RWxlbWVudEF0dHJpYnV0ZShyZW5kZXJFbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBvbmx5IGluIGRlYnVnIG1vZGUgdG8gc2VyaWFsaXplIHByb3BlcnR5IGNoYW5nZXMgdG8gY29tbWVudCBub2RlcyxcbiAgICogc3VjaCBhcyA8dGVtcGxhdGU+IHBsYWNlaG9sZGVycy5cbiAgICovXG4gIHNldEJpbmRpbmdEZWJ1Z0luZm8ocmVuZGVyRWxlbWVudDogYW55LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZWdhdGUuc2V0QmluZGluZ0RlYnVnSW5mbyhyZW5kZXJFbGVtZW50LCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgb25seSBpbiBkZXZlbG9wbWVudCBtb2RlIHRvIHNldCBpbmZvcm1hdGlvbiBuZWVkZWQgYnkgdGhlIERlYnVnTm9kZSBmb3IgdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgc2V0RWxlbWVudERlYnVnSW5mbyhyZW5kZXJFbGVtZW50OiBhbnksIGluZm86IFJlbmRlckRlYnVnSW5mbykge1xuICAgIHZhciBkZWJ1Z0VsID0gZ2V0RGVidWdOb2RlKHJlbmRlckVsZW1lbnQpO1xuICAgIGRlYnVnRWwuc2V0RGVidWdJbmZvKGluZm8pO1xuICAgIHRoaXMuX2RlbGVnYXRlLnNldEVsZW1lbnREZWJ1Z0luZm8ocmVuZGVyRWxlbWVudCwgaW5mbyk7XG4gIH1cblxuICBzZXRFbGVtZW50Q2xhc3MocmVuZGVyRWxlbWVudDogYW55LCBjbGFzc05hbWU6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZS5zZXRFbGVtZW50Q2xhc3MocmVuZGVyRWxlbWVudCwgY2xhc3NOYW1lLCBpc0FkZCk7XG4gIH1cblxuICBzZXRFbGVtZW50U3R5bGUocmVuZGVyRWxlbWVudDogYW55LCBzdHlsZU5hbWU6IHN0cmluZywgc3R5bGVWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZWdhdGUuc2V0RWxlbWVudFN0eWxlKHJlbmRlckVsZW1lbnQsIHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSk7XG4gIH1cblxuICBpbnZva2VFbGVtZW50TWV0aG9kKHJlbmRlckVsZW1lbnQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkge1xuICAgIHRoaXMuX2RlbGVnYXRlLmludm9rZUVsZW1lbnRNZXRob2QocmVuZGVyRWxlbWVudCwgbWV0aG9kTmFtZSwgYXJncyk7XG4gIH1cblxuICBzZXRUZXh0KHJlbmRlck5vZGU6IGFueSwgdGV4dDogc3RyaW5nKSB7IHRoaXMuX2RlbGVnYXRlLnNldFRleHQocmVuZGVyTm9kZSwgdGV4dCk7IH1cbn1cbiJdfQ==