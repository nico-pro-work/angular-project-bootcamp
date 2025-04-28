import { inject, Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { GetParcelByIdResponse } from "@models/api-models";


@Injectable()
export class MarbleRunApiService {
    private readonly apiService = inject(ApiService);


    // TODO Update type
    getParcelById(id: string | number): Observable<GetParcelByIdResponse> {
        return this.apiService.get(`parcel/${id.toString()}`);
    }

}