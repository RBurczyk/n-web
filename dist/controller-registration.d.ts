import "reflect-metadata";
import { RouteInfo } from "./route-info";
import "@nivinjoseph/n-ext";
import { Claim } from "@nivinjoseph/n-sec";
export declare class ControllerRegistration {
    private readonly _name;
    private readonly _controller;
    private _method;
    private _route;
    private _viewFileName;
    private _viewFilePath;
    private _viewFileData;
    private _viewLayoutFileName;
    private _viewLayoutFilePath;
    private _viewLayoutFileData;
    private _authorizeClaims;
    get name(): string;
    get controller(): Function;
    get method(): string;
    get route(): RouteInfo;
    get view(): string;
    get viewLayout(): string;
    get authorizeClaims(): ReadonlyArray<Claim>;
    constructor(controller: Function);
    complete(viewResolutionRoot: string): void;
    private configureViews;
    private resolvePath;
    private retrieveView;
    private retrieveViewLayout;
    private isDev;
}
