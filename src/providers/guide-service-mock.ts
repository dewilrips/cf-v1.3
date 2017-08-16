import {Injectable} from '@angular/core';
import guides from './mock-guides';

@Injectable()
export class GuideService {

    findAll() {
        return Promise.resolve(guides);
    }

    findById(id) {
        return Promise.resolve(guides[id - 1]);
    }

}
