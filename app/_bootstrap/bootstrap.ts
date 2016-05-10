import {trace, UIROUTER_PROVIDERS, UiView, UIRouterConfig, Category} from "ui-router-ng2";
import {MyUIRouterConfig} from "./router.config";
import {HTTP_PROVIDERS} from "@angular/http";
import {provide} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

bootstrap(UiView, [
    ...UIROUTER_PROVIDERS,
    ...HTTP_PROVIDERS,
    // Provide a custom UIRouterConfig to configure UI-Router
    provide(UIRouterConfig, { useClass: MyUIRouterConfig })
]);
