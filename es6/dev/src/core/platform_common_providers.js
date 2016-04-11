import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { Console } from 'angular2/src/core/console';
import { Reflector, reflector } from './reflection/reflection';
import { ReflectorReader } from './reflection/reflector_reader';
import { TestabilityRegistry } from 'angular2/src/core/testability/testability';
function _reflector() {
    return reflector;
}
/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS = CONST_EXPR([
    new Provider(Reflector, { useFactory: _reflector, deps: [] }),
    new Provider(ReflectorReader, { useExisting: Reflector }),
    TestabilityRegistry,
    Console
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSmcwY1hWQmYudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOlsiX3JlZmxlY3RvciJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBOEMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3pGLEVBQVUsUUFBUSxFQUF3QixNQUFNLHNCQUFzQjtPQUN0RSxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQjtPQUMxQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSx5QkFBeUI7T0FDckQsRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0I7T0FDdEQsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJDQUEyQztBQUU3RTtJQUNFQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtBQUNuQkEsQ0FBQ0E7QUFFRDs7R0FFRztBQUNILGFBQWEseUJBQXlCLEdBQW1DLFVBQVUsQ0FBQztJQUNsRixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUMzRCxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLENBQUM7SUFDdkQsbUJBQW1CO0lBQ25CLE9BQU87Q0FDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIGlzQmxhbmssIGlzUHJlc2VudCwgYXNzZXJ0aW9uc0VuYWJsZWQsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY29uc29sZSc7XG5pbXBvcnQge1JlZmxlY3RvciwgcmVmbGVjdG9yfSBmcm9tICcuL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5pbXBvcnQge1JlZmxlY3RvclJlYWRlcn0gZnJvbSAnLi9yZWZsZWN0aW9uL3JlZmxlY3Rvcl9yZWFkZXInO1xuaW1wb3J0IHtUZXN0YWJpbGl0eVJlZ2lzdHJ5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5cbmZ1bmN0aW9uIF9yZWZsZWN0b3IoKTogUmVmbGVjdG9yIHtcbiAgcmV0dXJuIHJlZmxlY3Rvcjtcbn1cblxuLyoqXG4gKiBBIGRlZmF1bHQgc2V0IG9mIHByb3ZpZGVycyB3aGljaCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gYW55IEFuZ3VsYXIgcGxhdGZvcm0uXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFURk9STV9DT01NT05fUFJPVklERVJTOiBBcnJheTxUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXT4gPSBDT05TVF9FWFBSKFtcbiAgbmV3IFByb3ZpZGVyKFJlZmxlY3Rvciwge3VzZUZhY3Rvcnk6IF9yZWZsZWN0b3IsIGRlcHM6IFtdfSksXG4gIG5ldyBQcm92aWRlcihSZWZsZWN0b3JSZWFkZXIsIHt1c2VFeGlzdGluZzogUmVmbGVjdG9yfSksXG4gIFRlc3RhYmlsaXR5UmVnaXN0cnksXG4gIENvbnNvbGVcbl0pOyJdfQ==