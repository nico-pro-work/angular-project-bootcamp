import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {
  CreateParcelBody,
  CreateParcelResponse,
  DeleteParcelBody,
  DeleteParcelResponse,
  GetParcelByIdResponse,
  UpdateParcelBody,
  UpdateParcelResponse,
} from '@models/api-models';

@Injectable()
export class MarbleRunApiService {
  private readonly apiService = inject(ApiService);

  // TODO Update type
  getParcelById(id: string | number): Observable<GetParcelByIdResponse> {
    return this.apiService.get(`parcel/${id.toString()}`);
  }
//   createParcel(data: CreateParcelBody): Observable<CreateParcelResponse> {
//     return this.apiService.post(`parcel/${id.toString()}`);
//   }
//   updateParcel(data: UpdateParcelBody): Observable<UpdateParcelResponse> {
//     return this.apiService.put(`parcel/${id.toString()}`);
//   }
//   deleteParcel(data: DeleteParcelBody): Observable<DeleteParcelResponse> {
//     return this.apiService.delete(`parcel/${id.toString()}`);
//   }
}
