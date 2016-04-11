'use strict';function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var runtime_compiler_1 = require("./runtime_compiler");
var template_compiler_1 = require('./template_compiler');
exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
var directive_metadata_1 = require('./directive_metadata');
exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
var source_module_1 = require('./source_module');
exports.SourceModule = source_module_1.SourceModule;
exports.SourceWithImports = source_module_1.SourceWithImports;
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
__export(require('angular2/src/compiler/template_ast'));
var template_parser_1 = require('angular2/src/compiler/template_parser');
exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var template_parser_2 = require('angular2/src/compiler/template_parser');
var html_parser_1 = require('angular2/src/compiler/html_parser');
var template_normalizer_1 = require('angular2/src/compiler/template_normalizer');
var runtime_metadata_1 = require('angular2/src/compiler/runtime_metadata');
var change_detector_compiler_1 = require('angular2/src/compiler/change_detector_compiler');
var style_compiler_1 = require('angular2/src/compiler/style_compiler');
var view_compiler_1 = require('angular2/src/compiler/view_compiler');
var proto_view_compiler_1 = require('angular2/src/compiler/proto_view_compiler');
var template_compiler_2 = require('angular2/src/compiler/template_compiler');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var compiler_1 = require('angular2/src/core/linker/compiler');
var runtime_compiler_2 = require('angular2/src/compiler/runtime_compiler');
var element_schema_registry_1 = require('angular2/src/compiler/schema/element_schema_registry');
var dom_element_schema_registry_1 = require('angular2/src/compiler/schema/dom_element_schema_registry');
var url_resolver_1 = require('angular2/src/compiler/url_resolver');
var change_detection_2 = require('angular2/src/core/change_detection/change_detection');
function _createChangeDetectorGenConfig() {
    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
    change_detection_2.Lexer,
    change_detection_2.Parser,
    html_parser_1.HtmlParser,
    template_parser_2.TemplateParser,
    template_normalizer_1.TemplateNormalizer,
    runtime_metadata_1.RuntimeMetadataResolver,
    url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER,
    style_compiler_1.StyleCompiler,
    proto_view_compiler_1.ProtoViewCompiler,
    view_compiler_1.ViewCompiler,
    change_detector_compiler_1.ChangeDetectionCompiler,
    new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, { useFactory: _createChangeDetectorGenConfig, deps: [] }),
    template_compiler_2.TemplateCompiler,
    new di_1.Provider(runtime_compiler_2.RuntimeCompiler, { useClass: runtime_compiler_1.RuntimeCompiler_ }),
    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_2.RuntimeCompiler }),
    dom_element_schema_registry_1.DomElementSchemaRegistry,
    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
    url_resolver_1.UrlResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUdIVThNQ0VWLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOlsiX2NyZWF0ZUNoYW5nZURldGVjdG9yR2VuQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBK0Isb0JBQW9CLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0IscUJBQXFCLENBQUM7QUFBN0MsZ0VBQTZDO0FBQ3JELG1DQUlPLHNCQUFzQixDQUFDO0FBSDVCLGlGQUF3QjtBQUN4Qix1RUFBbUI7QUFDbkIsK0VBQzRCO0FBQzlCLDhCQUE4QyxpQkFBaUIsQ0FBQztBQUF4RCxvREFBWTtBQUFFLDhEQUEwQztBQUNoRSw4Q0FBa0QsaURBQWlELENBQUM7QUFBNUYsa0ZBQW1CO0FBQUUsd0VBQXVFO0FBQ3BHLGlCQUFjLG9DQUFvQyxDQUFDLEVBQUE7QUFDbkQsZ0NBQWtDLHVDQUF1QyxDQUFDO0FBQWxFLG9FQUFrRTtBQUMxRSxxQkFBa0QsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RSxtQkFBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBNkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNyRSw0QkFBeUIsbUNBQW1DLENBQUMsQ0FBQTtBQUM3RCxvQ0FBaUMsMkNBQTJDLENBQUMsQ0FBQTtBQUM3RSxpQ0FBc0Msd0NBQXdDLENBQUMsQ0FBQTtBQUMvRSx5Q0FBc0MsZ0RBQWdELENBQUMsQ0FBQTtBQUN2RiwrQkFBNEIsc0NBQXNDLENBQUMsQ0FBQTtBQUNuRSw4QkFBMkIscUNBQXFDLENBQUMsQ0FBQTtBQUNqRSxvQ0FBZ0MsMkNBQTJDLENBQUMsQ0FBQTtBQUM1RSxrQ0FBK0IseUNBQXlDLENBQUMsQ0FBQTtBQUN6RSxpQ0FBc0MscURBQXFELENBQUMsQ0FBQTtBQUM1Rix5QkFBdUIsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRCxpQ0FBOEIsd0NBQXdDLENBQUMsQ0FBQTtBQUN2RSx3Q0FBb0Msc0RBQXNELENBQUMsQ0FBQTtBQUMzRiw0Q0FBdUMsMERBQTBELENBQUMsQ0FBQTtBQUNsRyw2QkFBd0Qsb0NBQW9DLENBQUMsQ0FBQTtBQUM3RixpQ0FBNEIscURBQXFELENBQUMsQ0FBQTtBQUVsRjtJQUNFQSxNQUFNQSxDQUFDQSxJQUFJQSwwQ0FBdUJBLENBQUNBLHdCQUFpQkEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDdkVBLENBQUNBO0FBRUQ7OztHQUdHO0FBQ1UsMEJBQWtCLEdBQW1DLGlCQUFVLENBQUM7SUFDM0Usd0JBQUs7SUFDTCx5QkFBTTtJQUNOLHdCQUFVO0lBQ1YsZ0NBQWM7SUFDZCx3Q0FBa0I7SUFDbEIsMENBQXVCO0lBQ3ZCLDJDQUE0QjtJQUM1Qiw4QkFBYTtJQUNiLHVDQUFpQjtJQUNqQiw0QkFBWTtJQUNaLGtEQUF1QjtJQUN2QixJQUFJLGFBQVEsQ0FBQywwQ0FBdUIsRUFBRSxFQUFDLFVBQVUsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDN0Ysb0NBQWdCO0lBQ2hCLElBQUksYUFBUSxDQUFDLGtDQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUNBQWdCLEVBQUMsQ0FBQztJQUMzRCxJQUFJLGFBQVEsQ0FBQyxtQkFBUSxFQUFFLEVBQUMsV0FBVyxFQUFFLGtDQUFlLEVBQUMsQ0FBQztJQUN0RCxzREFBd0I7SUFDeEIsSUFBSSxhQUFRLENBQUMsK0NBQXFCLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0RBQXdCLEVBQUMsQ0FBQztJQUM1RSwwQkFBVztDQUNaLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UnVudGltZUNvbXBpbGVyX30gZnJvbSBcIi4vcnVudGltZV9jb21waWxlclwiO1xuZXhwb3J0IHtUZW1wbGF0ZUNvbXBpbGVyfSBmcm9tICcuL3RlbXBsYXRlX2NvbXBpbGVyJztcbmV4cG9ydCB7XG4gIENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgQ29tcGlsZVR5cGVNZXRhZGF0YSxcbiAgQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGFcbn0gZnJvbSAnLi9kaXJlY3RpdmVfbWV0YWRhdGEnO1xuZXhwb3J0IHtTb3VyY2VNb2R1bGUsIFNvdXJjZVdpdGhJbXBvcnRzfSBmcm9tICcuL3NvdXJjZV9tb2R1bGUnO1xuZXhwb3J0IHtQTEFURk9STV9ESVJFQ1RJVkVTLCBQTEFURk9STV9QSVBFU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcGxhdGZvcm1fZGlyZWN0aXZlc19hbmRfcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2FzdCc7XG5leHBvcnQge1RFTVBMQVRFX1RSQU5TRk9STVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHthc3NlcnRpb25zRW5hYmxlZCwgVHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7VGVtcGxhdGVQYXJzZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9wYXJzZXInO1xuaW1wb3J0IHtIdG1sUGFyc2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtUZW1wbGF0ZU5vcm1hbGl6ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9ub3JtYWxpemVyJztcbmltcG9ydCB7UnVudGltZU1ldGFkYXRhUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9ydW50aW1lX21ldGFkYXRhJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uQ29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9jaGFuZ2VfZGV0ZWN0b3JfY29tcGlsZXInO1xuaW1wb3J0IHtTdHlsZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXInO1xuaW1wb3J0IHtWaWV3Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci92aWV3X2NvbXBpbGVyJztcbmltcG9ydCB7UHJvdG9WaWV3Q29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9wcm90b192aWV3X2NvbXBpbGVyJztcbmltcG9ydCB7VGVtcGxhdGVDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3RlbXBsYXRlX2NvbXBpbGVyJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JHZW5Db25maWd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvY29tcGlsZXInO1xuaW1wb3J0IHtSdW50aW1lQ29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9ydW50aW1lX2NvbXBpbGVyJztcbmltcG9ydCB7RWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc2NoZW1hL2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5JztcbmltcG9ydCB7RG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvc2NoZW1hL2RvbV9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge1VybFJlc29sdmVyLCBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdXJsX3Jlc29sdmVyJztcbmltcG9ydCB7UGFyc2VyLCBMZXhlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcblxuZnVuY3Rpb24gX2NyZWF0ZUNoYW5nZURldGVjdG9yR2VuQ29uZmlnKCkge1xuICByZXR1cm4gbmV3IENoYW5nZURldGVjdG9yR2VuQ29uZmlnKGFzc2VydGlvbnNFbmFibGVkKCksIGZhbHNlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBwcm92aWRlcnMgdGhhdCBwcm92aWRlIGBSdW50aW1lQ29tcGlsZXJgIGFuZCBpdHMgZGVwZW5kZW5jaWVzIHRvIHVzZSBmb3JcbiAqIHRlbXBsYXRlIGNvbXBpbGF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTOiBBcnJheTxUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXT4gPSBDT05TVF9FWFBSKFtcbiAgTGV4ZXIsXG4gIFBhcnNlcixcbiAgSHRtbFBhcnNlcixcbiAgVGVtcGxhdGVQYXJzZXIsXG4gIFRlbXBsYXRlTm9ybWFsaXplcixcbiAgUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIsXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIFN0eWxlQ29tcGlsZXIsXG4gIFByb3RvVmlld0NvbXBpbGVyLFxuICBWaWV3Q29tcGlsZXIsXG4gIENoYW5nZURldGVjdGlvbkNvbXBpbGVyLFxuICBuZXcgUHJvdmlkZXIoQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcsIHt1c2VGYWN0b3J5OiBfY3JlYXRlQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcsIGRlcHM6IFtdfSksXG4gIFRlbXBsYXRlQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihSdW50aW1lQ29tcGlsZXIsIHt1c2VDbGFzczogUnVudGltZUNvbXBpbGVyX30pLFxuICBuZXcgUHJvdmlkZXIoQ29tcGlsZXIsIHt1c2VFeGlzdGluZzogUnVudGltZUNvbXBpbGVyfSksXG4gIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSxcbiAgbmV3IFByb3ZpZGVyKEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwge3VzZUV4aXN0aW5nOiBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9KSxcbiAgVXJsUmVzb2x2ZXJcbl0pO1xuIl19