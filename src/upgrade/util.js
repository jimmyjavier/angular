'use strict';function stringify(obj) {
    if (typeof obj == 'function')
        return obj.name || obj.toString();
    return '' + obj;
}
exports.stringify = stringify;
function onError(e) {
    // TODO: (misko): We seem to not have a stack trace here!
    console.log(e, e.stack);
    throw e;
}
exports.onError = onError;
function controllerKey(name) {
    return '$' + name + 'Controller';
}
exports.controllerKey = controllerKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUHJTdXY3dkcudG1wL2FuZ3VsYXIyL3NyYy91cGdyYWRlL3V0aWwudHMiXSwibmFtZXMiOlsic3RyaW5naWZ5Iiwib25FcnJvciIsImNvbnRyb2xsZXJLZXkiXSwibWFwcGluZ3MiOiJBQUNBLG1CQUEwQixHQUFRO0lBQ2hDQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQTtRQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtJQUNoRUEsTUFBTUEsQ0FBQ0EsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0E7QUFDbEJBLENBQUNBO0FBSGUsaUJBQVMsWUFHeEIsQ0FBQTtBQUdELGlCQUF3QixDQUFNO0lBQzVCQyx5REFBeURBO0lBQ3pEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUN4QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7QUFDVkEsQ0FBQ0E7QUFKZSxlQUFPLFVBSXRCLENBQUE7QUFFRCx1QkFBOEIsSUFBWTtJQUN4Q0MsTUFBTUEsQ0FBQ0EsR0FBR0EsR0FBR0EsSUFBSUEsR0FBR0EsWUFBWUEsQ0FBQ0E7QUFDbkNBLENBQUNBO0FBRmUscUJBQWEsZ0JBRTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkob2JqOiBhbnkpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSByZXR1cm4gb2JqLm5hbWUgfHwgb2JqLnRvU3RyaW5nKCk7XG4gIHJldHVybiAnJyArIG9iajtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gb25FcnJvcihlOiBhbnkpIHtcbiAgLy8gVE9ETzogKG1pc2tvKTogV2Ugc2VlbSB0byBub3QgaGF2ZSBhIHN0YWNrIHRyYWNlIGhlcmUhXG4gIGNvbnNvbGUubG9nKGUsIGUuc3RhY2spO1xuICB0aHJvdyBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbGxlcktleShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gJyQnICsgbmFtZSArICdDb250cm9sbGVyJztcbn1cbiJdfQ==