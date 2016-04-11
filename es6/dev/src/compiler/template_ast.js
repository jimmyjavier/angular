import { isPresent } from 'angular2/src/facade/lang';
/**
 * A segment of text within the template.
 */
export class TextAst {
    constructor(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) { return visitor.visitText(this, context); }
}
/**
 * A bound expression within the text of a template.
 */
export class BoundTextAst {
    constructor(value, ngContentIndex, sourceSpan) {
        this.value = value;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitBoundText(this, context);
    }
}
/**
 * A plain attribute on an element.
 */
export class AttrAst {
    constructor(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) { return visitor.visitAttr(this, context); }
}
/**
 * A binding for an element property (e.g. `[property]="expression"`).
 */
export class BoundElementPropertyAst {
    constructor(name, type, value, unit, sourceSpan) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.unit = unit;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitElementProperty(this, context);
    }
}
/**
 * A binding for an element event (e.g. `(event)="handler()"`).
 */
export class BoundEventAst {
    constructor(name, target, handler, sourceSpan) {
        this.name = name;
        this.target = target;
        this.handler = handler;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitEvent(this, context);
    }
    get fullName() {
        if (isPresent(this.target)) {
            return `${this.target}:${this.name}`;
        }
        else {
            return this.name;
        }
    }
}
/**
 * A variable declaration on an element (e.g. `#var="expression"`).
 */
export class VariableAst {
    constructor(name, value, sourceSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitVariable(this, context);
    }
}
/**
 * An element declaration in a template.
 */
export class ElementAst {
    constructor(name, attrs, inputs, outputs, exportAsVars, directives, children, ngContentIndex, sourceSpan) {
        this.name = name;
        this.attrs = attrs;
        this.inputs = inputs;
        this.outputs = outputs;
        this.exportAsVars = exportAsVars;
        this.directives = directives;
        this.children = children;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitElement(this, context);
    }
    /**
     * Whether the element has any active bindings (inputs, outputs, vars, or directives).
     */
    isBound() {
        return (this.inputs.length > 0 || this.outputs.length > 0 || this.exportAsVars.length > 0 ||
            this.directives.length > 0);
    }
    /**
     * Get the component associated with this element, if any.
     */
    getComponent() {
        return this.directives.length > 0 && this.directives[0].directive.isComponent ?
            this.directives[0].directive :
            null;
    }
}
/**
 * A `<template>` element included in an Angular template.
 */
export class EmbeddedTemplateAst {
    constructor(attrs, outputs, vars, directives, children, ngContentIndex, sourceSpan) {
        this.attrs = attrs;
        this.outputs = outputs;
        this.vars = vars;
        this.directives = directives;
        this.children = children;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitEmbeddedTemplate(this, context);
    }
}
/**
 * A directive property with a bound value (e.g. `*ngIf="condition").
 */
export class BoundDirectivePropertyAst {
    constructor(directiveName, templateName, value, sourceSpan) {
        this.directiveName = directiveName;
        this.templateName = templateName;
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitDirectiveProperty(this, context);
    }
}
/**
 * A directive declared on an element.
 */
export class DirectiveAst {
    constructor(directive, inputs, hostProperties, hostEvents, exportAsVars, sourceSpan) {
        this.directive = directive;
        this.inputs = inputs;
        this.hostProperties = hostProperties;
        this.hostEvents = hostEvents;
        this.exportAsVars = exportAsVars;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitDirective(this, context);
    }
}
/**
 * Position where content is to be projected (instance of `<ng-content>` in a template).
 */
export class NgContentAst {
    constructor(index, ngContentIndex, sourceSpan) {
        this.index = index;
        this.ngContentIndex = ngContentIndex;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) {
        return visitor.visitNgContent(this, context);
    }
}
/**
 * Enumeration of types of property bindings.
 */
export var PropertyBindingType;
(function (PropertyBindingType) {
    /**
     * A normal binding to a property (e.g. `[property]="expression"`).
     */
    PropertyBindingType[PropertyBindingType["Property"] = 0] = "Property";
    /**
     * A binding to an element attribute (e.g. `[attr.name]="expression"`).
     */
    PropertyBindingType[PropertyBindingType["Attribute"] = 1] = "Attribute";
    /**
     * A binding to a CSS class (e.g. `[class.name]="condition"`).
     */
    PropertyBindingType[PropertyBindingType["Class"] = 2] = "Class";
    /**
     * A binding to a style rule (e.g. `[style.rule]="expression"`).
     */
    PropertyBindingType[PropertyBindingType["Style"] = 3] = "Style";
})(PropertyBindingType || (PropertyBindingType = {}));
/**
 * Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.
 */
export function templateVisitAll(visitor, asts, context = null) {
    var result = [];
    asts.forEach(ast => {
        var astResult = ast.visit(visitor, context);
        if (isPresent(astResult)) {
            result.push(astResult);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1KZzBjWFZCZi50bXAvYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdC50cyJdLCJuYW1lcyI6WyJUZXh0QXN0IiwiVGV4dEFzdC5jb25zdHJ1Y3RvciIsIlRleHRBc3QudmlzaXQiLCJCb3VuZFRleHRBc3QiLCJCb3VuZFRleHRBc3QuY29uc3RydWN0b3IiLCJCb3VuZFRleHRBc3QudmlzaXQiLCJBdHRyQXN0IiwiQXR0ckFzdC5jb25zdHJ1Y3RvciIsIkF0dHJBc3QudmlzaXQiLCJCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCIsIkJvdW5kRWxlbWVudFByb3BlcnR5QXN0LmNvbnN0cnVjdG9yIiwiQm91bmRFbGVtZW50UHJvcGVydHlBc3QudmlzaXQiLCJCb3VuZEV2ZW50QXN0IiwiQm91bmRFdmVudEFzdC5jb25zdHJ1Y3RvciIsIkJvdW5kRXZlbnRBc3QudmlzaXQiLCJCb3VuZEV2ZW50QXN0LmZ1bGxOYW1lIiwiVmFyaWFibGVBc3QiLCJWYXJpYWJsZUFzdC5jb25zdHJ1Y3RvciIsIlZhcmlhYmxlQXN0LnZpc2l0IiwiRWxlbWVudEFzdCIsIkVsZW1lbnRBc3QuY29uc3RydWN0b3IiLCJFbGVtZW50QXN0LnZpc2l0IiwiRWxlbWVudEFzdC5pc0JvdW5kIiwiRWxlbWVudEFzdC5nZXRDb21wb25lbnQiLCJFbWJlZGRlZFRlbXBsYXRlQXN0IiwiRW1iZWRkZWRUZW1wbGF0ZUFzdC5jb25zdHJ1Y3RvciIsIkVtYmVkZGVkVGVtcGxhdGVBc3QudmlzaXQiLCJCb3VuZERpcmVjdGl2ZVByb3BlcnR5QXN0IiwiQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdC5jb25zdHJ1Y3RvciIsIkJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3QudmlzaXQiLCJEaXJlY3RpdmVBc3QiLCJEaXJlY3RpdmVBc3QuY29uc3RydWN0b3IiLCJEaXJlY3RpdmVBc3QudmlzaXQiLCJOZ0NvbnRlbnRBc3QiLCJOZ0NvbnRlbnRBc3QuY29uc3RydWN0b3IiLCJOZ0NvbnRlbnRBc3QudmlzaXQiLCJQcm9wZXJ0eUJpbmRpbmdUeXBlIiwidGVtcGxhdGVWaXNpdEFsbCJdLCJtYXBwaW5ncyI6Ik9BQ08sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEI7QUFtQmxEOztHQUVHO0FBQ0g7SUFDRUEsWUFBbUJBLEtBQWFBLEVBQVNBLGNBQXNCQSxFQUM1Q0EsVUFBMkJBO1FBRDNCQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFRQTtRQUFTQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBUUE7UUFDNUNBLGVBQVVBLEdBQVZBLFVBQVVBLENBQWlCQTtJQUFHQSxDQUFDQTtJQUNsREQsS0FBS0EsQ0FBQ0EsT0FBMkJBLEVBQUVBLE9BQVlBLElBQVNFLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3BHRixDQUFDQTtBQUVEOztHQUVHO0FBQ0g7SUFDRUcsWUFBbUJBLEtBQVVBLEVBQVNBLGNBQXNCQSxFQUN6Q0EsVUFBMkJBO1FBRDNCQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFLQTtRQUFTQSxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBUUE7UUFDekNBLGVBQVVBLEdBQVZBLFVBQVVBLENBQWlCQTtJQUFHQSxDQUFDQTtJQUNsREQsS0FBS0EsQ0FBQ0EsT0FBMkJBLEVBQUVBLE9BQVlBO1FBQzdDRSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUMvQ0EsQ0FBQ0E7QUFDSEYsQ0FBQ0E7QUFFRDs7R0FFRztBQUNIO0lBQ0VHLFlBQW1CQSxJQUFZQSxFQUFTQSxLQUFhQSxFQUFTQSxVQUEyQkE7UUFBdEVDLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO1FBQVNBLFVBQUtBLEdBQUxBLEtBQUtBLENBQVFB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QUNkQSxJQUFJQSxTQUFTQSxHQUFHQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNIQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNoQkEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FTVH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDb21waWxlRGlyZWN0aXZlTWV0YWRhdGF9IGZyb20gJy4vZGlyZWN0aXZlX21ldGFkYXRhJztcbmltcG9ydCB7UGFyc2VTb3VyY2VTcGFufSBmcm9tICcuL3BhcnNlX3V0aWwnO1xuXG4vKipcbiAqIEFuIEFic3RyYWN0IFN5bnRheCBUcmVlIG5vZGUgcmVwcmVzZW50aW5nIHBhcnQgb2YgYSBwYXJzZWQgQW5ndWxhciB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUFzdCB7XG4gIC8qKlxuICAgKiBUaGUgc291cmNlIHNwYW4gZnJvbSB3aGljaCB0aGlzIG5vZGUgd2FzIHBhcnNlZC5cbiAgICovXG4gIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbjtcblxuICAvKipcbiAgICogVmlzaXQgdGhpcyBub2RlIGFuZCBwb3NzaWJseSB0cmFuc2Zvcm0gaXQuXG4gICAqL1xuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueTtcbn1cblxuLyoqXG4gKiBBIHNlZ21lbnQgb2YgdGV4dCB3aXRoaW4gdGhlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgVGV4dEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG4vKipcbiAqIEEgYm91bmQgZXhwcmVzc2lvbiB3aXRoaW4gdGhlIHRleHQgb2YgYSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvdW5kVGV4dEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBBU1QsIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCb3VuZFRleHQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHBsYWluIGF0dHJpYnV0ZSBvbiBhbiBlbGVtZW50LlxuICovXG5leHBvcnQgY2xhc3MgQXR0ckFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRBdHRyKHRoaXMsIGNvbnRleHQpOyB9XG59XG5cbi8qKlxuICogQSBiaW5kaW5nIGZvciBhbiBlbGVtZW50IHByb3BlcnR5IChlLmcuIGBbcHJvcGVydHldPVwiZXhwcmVzc2lvblwiYCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHR5cGU6IFByb3BlcnR5QmluZGluZ1R5cGUsIHB1YmxpYyB2YWx1ZTogQVNULFxuICAgICAgICAgICAgICBwdWJsaWMgdW5pdDogc3RyaW5nLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50UHJvcGVydHkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGJpbmRpbmcgZm9yIGFuIGVsZW1lbnQgZXZlbnQgKGUuZy4gYChldmVudCk9XCJoYW5kbGVyKClcImApLlxuICovXG5leHBvcnQgY2xhc3MgQm91bmRFdmVudEFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHRhcmdldDogc3RyaW5nLCBwdWJsaWMgaGFuZGxlcjogQVNULFxuICAgICAgICAgICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFdmVudCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnRhcmdldH06JHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhcmlhYmxlIGRlY2xhcmF0aW9uIG9uIGFuIGVsZW1lbnQgKGUuZy4gYCN2YXI9XCJleHByZXNzaW9uXCJgKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhcmlhYmxlQXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZywgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0VmFyaWFibGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbGVtZW50IGRlY2xhcmF0aW9uIGluIGEgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50QXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYXR0cnM6IEF0dHJBc3RbXSxcbiAgICAgICAgICAgICAgcHVibGljIGlucHV0czogQm91bmRFbGVtZW50UHJvcGVydHlBc3RbXSwgcHVibGljIG91dHB1dHM6IEJvdW5kRXZlbnRBc3RbXSxcbiAgICAgICAgICAgICAgcHVibGljIGV4cG9ydEFzVmFyczogVmFyaWFibGVBc3RbXSwgcHVibGljIGRpcmVjdGl2ZXM6IERpcmVjdGl2ZUFzdFtdLFxuICAgICAgICAgICAgICBwdWJsaWMgY2hpbGRyZW46IFRlbXBsYXRlQXN0W10sIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaGFzIGFueSBhY3RpdmUgYmluZGluZ3MgKGlucHV0cywgb3V0cHV0cywgdmFycywgb3IgZGlyZWN0aXZlcykuXG4gICAqL1xuICBpc0JvdW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5pbnB1dHMubGVuZ3RoID4gMCB8fCB0aGlzLm91dHB1dHMubGVuZ3RoID4gMCB8fCB0aGlzLmV4cG9ydEFzVmFycy5sZW5ndGggPiAwIHx8XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMubGVuZ3RoID4gMCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjb21wb25lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZWxlbWVudCwgaWYgYW55LlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50KCk6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aXZlcy5sZW5ndGggPiAwICYmIHRoaXMuZGlyZWN0aXZlc1swXS5kaXJlY3RpdmUuaXNDb21wb25lbnQgP1xuICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzWzBdLmRpcmVjdGl2ZSA6XG4gICAgICAgICAgICAgICBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQSBgPHRlbXBsYXRlPmAgZWxlbWVudCBpbmNsdWRlZCBpbiBhbiBBbmd1bGFyIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRW1iZWRkZWRUZW1wbGF0ZUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGF0dHJzOiBBdHRyQXN0W10sIHB1YmxpYyBvdXRwdXRzOiBCb3VuZEV2ZW50QXN0W10sIHB1YmxpYyB2YXJzOiBWYXJpYWJsZUFzdFtdLFxuICAgICAgICAgICAgICBwdWJsaWMgZGlyZWN0aXZlczogRGlyZWN0aXZlQXN0W10sIHB1YmxpYyBjaGlsZHJlbjogVGVtcGxhdGVBc3RbXSxcbiAgICAgICAgICAgICAgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXIsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEVtYmVkZGVkVGVtcGxhdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBwcm9wZXJ0eSB3aXRoIGEgYm91bmQgdmFsdWUgKGUuZy4gYCpuZ0lmPVwiY29uZGl0aW9uXCIpLlxuICovXG5leHBvcnQgY2xhc3MgQm91bmREaXJlY3RpdmVQcm9wZXJ0eUFzdCBpbXBsZW1lbnRzIFRlbXBsYXRlQXN0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpcmVjdGl2ZU5hbWU6IHN0cmluZywgcHVibGljIHRlbXBsYXRlTmFtZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IEFTVCxcbiAgICAgICAgICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RGlyZWN0aXZlUHJvcGVydHkodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBkZWNsYXJlZCBvbiBhbiBlbGVtZW50LlxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlQXN0IGltcGxlbWVudHMgVGVtcGxhdGVBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlyZWN0aXZlOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gICAgICAgICAgICAgIHB1YmxpYyBpbnB1dHM6IEJvdW5kRGlyZWN0aXZlUHJvcGVydHlBc3RbXSxcbiAgICAgICAgICAgICAgcHVibGljIGhvc3RQcm9wZXJ0aWVzOiBCb3VuZEVsZW1lbnRQcm9wZXJ0eUFzdFtdLCBwdWJsaWMgaG9zdEV2ZW50czogQm91bmRFdmVudEFzdFtdLFxuICAgICAgICAgICAgICBwdWJsaWMgZXhwb3J0QXNWYXJzOiBWYXJpYWJsZUFzdFtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBUZW1wbGF0ZUFzdFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXREaXJlY3RpdmUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBQb3NpdGlvbiB3aGVyZSBjb250ZW50IGlzIHRvIGJlIHByb2plY3RlZCAoaW5zdGFuY2Ugb2YgYDxuZy1jb250ZW50PmAgaW4gYSB0ZW1wbGF0ZSkuXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0NvbnRlbnRBc3QgaW1wbGVtZW50cyBUZW1wbGF0ZUFzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbikge31cbiAgdmlzaXQodmlzaXRvcjogVGVtcGxhdGVBc3RWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmdDb250ZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogRW51bWVyYXRpb24gb2YgdHlwZXMgb2YgcHJvcGVydHkgYmluZGluZ3MuXG4gKi9cbmV4cG9ydCBlbnVtIFByb3BlcnR5QmluZGluZ1R5cGUge1xuXG4gIC8qKlxuICAgKiBBIG5vcm1hbCBiaW5kaW5nIHRvIGEgcHJvcGVydHkgKGUuZy4gYFtwcm9wZXJ0eV09XCJleHByZXNzaW9uXCJgKS5cbiAgICovXG4gIFByb3BlcnR5LFxuXG4gIC8qKlxuICAgKiBBIGJpbmRpbmcgdG8gYW4gZWxlbWVudCBhdHRyaWJ1dGUgKGUuZy4gYFthdHRyLm5hbWVdPVwiZXhwcmVzc2lvblwiYCkuXG4gICAqL1xuICBBdHRyaWJ1dGUsXG5cbiAgLyoqXG4gICAqIEEgYmluZGluZyB0byBhIENTUyBjbGFzcyAoZS5nLiBgW2NsYXNzLm5hbWVdPVwiY29uZGl0aW9uXCJgKS5cbiAgICovXG4gIENsYXNzLFxuXG4gIC8qKlxuICAgKiBBIGJpbmRpbmcgdG8gYSBzdHlsZSBydWxlIChlLmcuIGBbc3R5bGUucnVsZV09XCJleHByZXNzaW9uXCJgKS5cbiAgICovXG4gIFN0eWxlXG59XG5cbi8qKlxuICogQSB2aXNpdG9yIGZvciB7QGxpbmsgVGVtcGxhdGVBc3R9IHRyZWVzIHRoYXQgd2lsbCBwcm9jZXNzIGVhY2ggbm9kZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUFzdFZpc2l0b3Ige1xuICB2aXNpdE5nQ29udGVudChhc3Q6IE5nQ29udGVudEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEVtYmVkZGVkVGVtcGxhdGUoYXN0OiBFbWJlZGRlZFRlbXBsYXRlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnRBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRWYXJpYWJsZShhc3Q6IFZhcmlhYmxlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXZlbnQoYXN0OiBCb3VuZEV2ZW50QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RWxlbWVudFByb3BlcnR5KGFzdDogQm91bmRFbGVtZW50UHJvcGVydHlBc3QsIGNvbnRleHQ6IGFueSk6IGFueTtcbiAgdmlzaXRBdHRyKGFzdDogQXR0ckFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdEJvdW5kVGV4dChhc3Q6IEJvdW5kVGV4dEFzdCwgY29udGV4dDogYW55KTogYW55O1xuICB2aXNpdFRleHQoYXN0OiBUZXh0QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RGlyZWN0aXZlKGFzdDogRGlyZWN0aXZlQXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RGlyZWN0aXZlUHJvcGVydHkoYXN0OiBCb3VuZERpcmVjdGl2ZVByb3BlcnR5QXN0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbi8qKlxuICogVmlzaXQgZXZlcnkgbm9kZSBpbiBhIGxpc3Qgb2Yge0BsaW5rIFRlbXBsYXRlQXN0fXMgd2l0aCB0aGUgZ2l2ZW4ge0BsaW5rIFRlbXBsYXRlQXN0VmlzaXRvcn0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZVZpc2l0QWxsKHZpc2l0b3I6IFRlbXBsYXRlQXN0VmlzaXRvciwgYXN0czogVGVtcGxhdGVBc3RbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGFueSA9IG51bGwpOiBhbnlbXSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYXN0cy5mb3JFYWNoKGFzdCA9PiB7XG4gICAgdmFyIGFzdFJlc3VsdCA9IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoaXNQcmVzZW50KGFzdFJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFzdFJlc3VsdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==