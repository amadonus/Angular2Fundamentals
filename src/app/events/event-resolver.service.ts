﻿import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params['id'];
        return this.eventService.getEvent(id).map(event => event);
    }
}
