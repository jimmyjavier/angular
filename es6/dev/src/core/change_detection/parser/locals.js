import { isPresent } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { MapWrapper } from 'angular2/src/facade/collection';
export class Locals {
    constructor(parent, current) {
        this.parent = parent;
        this.current = current;
    }
    contains(name) {
        if (this.current.has(name)) {
            return true;
        }
        if (isPresent(this.parent)) {
            return this.parent.contains(name);
        }
        return false;
    }
    get(name) {
        if (this.current.has(name)) {
            return this.current.get(name);
        }
        if (isPresent(this.parent)) {
            return this.parent.get(name);
        }
        throw new BaseException(`Cannot find '${name}'`);
    }
    set(name, value) {
        // TODO(rado): consider removing this check if we can guarantee this is not
        // exposed to the public API.
        // TODO: vsavkin maybe it should check only the local map
        if (this.current.has(name)) {
            this.current.set(name, value);
        }
        else {
            throw new BaseException(`Setting of new keys post-construction is not supported. Key: ${name}.`);
        }
    }
    clearLocalValues() { MapWrapper.clearValues(this.current); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1KZzBjWFZCZi50bXAvYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9wYXJzZXIvbG9jYWxzLnRzIl0sIm5hbWVzIjpbIkxvY2FscyIsIkxvY2Fscy5jb25zdHJ1Y3RvciIsIkxvY2Fscy5jb250YWlucyIsIkxvY2Fscy5nZXQiLCJMb2NhbHMuc2V0IiwiTG9jYWxzLmNsZWFyTG9jYWxWYWx1ZXMiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzNDLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3JELEVBQWMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDO0FBRXRFO0lBQ0VBLFlBQW1CQSxNQUFjQSxFQUFTQSxPQUFzQkE7UUFBN0NDLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO1FBQVNBLFlBQU9BLEdBQVBBLE9BQU9BLENBQWVBO0lBQUdBLENBQUNBO0lBRXBFRCxRQUFRQSxDQUFDQSxJQUFZQTtRQUNuQkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNwQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUFFREYsR0FBR0EsQ0FBQ0EsSUFBWUE7UUFDZEcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2hDQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBRURBLE1BQU1BLElBQUlBLGFBQWFBLENBQUNBLGdCQUFnQkEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDbkRBLENBQUNBO0lBRURILEdBQUdBLENBQUNBLElBQVlBLEVBQUVBLEtBQVVBO1FBQzFCSSwyRUFBMkVBO1FBQzNFQSw2QkFBNkJBO1FBQzdCQSx5REFBeURBO1FBQ3pEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDaENBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLElBQUlBLGFBQWFBLENBQ25CQSxnRUFBZ0VBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBO1FBQy9FQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUVESixnQkFBZ0JBLEtBQVdLLFVBQVVBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3BFTCxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0xpc3RXcmFwcGVyLCBNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxzIHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhcmVudDogTG9jYWxzLCBwdWJsaWMgY3VycmVudDogTWFwPGFueSwgYW55Pikge31cblxuICBjb250YWlucyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jdXJyZW50LmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLnBhcmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jb250YWlucyhuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5jdXJyZW50LmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC5nZXQobmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLnBhcmVudCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXQobmFtZSk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYENhbm5vdCBmaW5kICcke25hbWV9J2ApO1xuICB9XG5cbiAgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIC8vIFRPRE8ocmFkbyk6IGNvbnNpZGVyIHJlbW92aW5nIHRoaXMgY2hlY2sgaWYgd2UgY2FuIGd1YXJhbnRlZSB0aGlzIGlzIG5vdFxuICAgIC8vIGV4cG9zZWQgdG8gdGhlIHB1YmxpYyBBUEkuXG4gICAgLy8gVE9ETzogdnNhdmtpbiBtYXliZSBpdCBzaG91bGQgY2hlY2sgb25seSB0aGUgbG9jYWwgbWFwXG4gICAgaWYgKHRoaXMuY3VycmVudC5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMuY3VycmVudC5zZXQobmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihcbiAgICAgICAgICBgU2V0dGluZyBvZiBuZXcga2V5cyBwb3N0LWNvbnN0cnVjdGlvbiBpcyBub3Qgc3VwcG9ydGVkLiBLZXk6ICR7bmFtZX0uYCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMb2NhbFZhbHVlcygpOiB2b2lkIHsgTWFwV3JhcHBlci5jbGVhclZhbHVlcyh0aGlzLmN1cnJlbnQpOyB9XG59XG4iXX0=