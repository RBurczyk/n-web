import { ComponentInstaller } from "n-ject";
import "n-ext";
export declare class WebApp {
    private readonly _port;
    private readonly _koa;
    private readonly _container;
    private readonly _router;
    private readonly _callContextKey;
    private readonly _exceptionHandlerKey;
    private _hasExceptionHandler;
    private readonly _authenticationHandlerKey;
    private _hasAuthenticationHandler;
    private readonly _authorizationHandlerKey;
    private _hasAuthorizationHandler;
    private readonly _staticFilePaths;
    private _enableCors;
    private _viewResolutionRoot;
    private _isBootstrapped;
    constructor(port: number);
    enableCors(): this;
    registerStaticFilePaths(...filePaths: string[]): this;
    registerControllers(...controllerClasses: Function[]): this;
    useInstaller(installer: ComponentInstaller): this;
    registerExceptionHandler(exceptionHandlerClass: Function): this;
    registerAuthenticationHandler(authenticationHandler: Function): this;
    registerAuthorizationHandler(authorizationHandler: Function): this;
    useViewResolutionRoot(path: string): this;
    enableWebPackDevMiddleware(makeItHot?: boolean, publicPath?: string): this;
    bootstrap(): void;
    private configureCors();
    private configureContainer();
    private configureScoping();
    private configureCallContext();
    private configureExceptionHandling();
    private configureErrorTrapping();
    private configureAuthentication();
    private configureStaticFileServing();
    private configureBodyParser();
    private configureRouting();
}
