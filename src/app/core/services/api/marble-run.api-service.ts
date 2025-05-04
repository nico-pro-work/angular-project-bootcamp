import { inject, Injectable, signal } from '@angular/core';
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
import { ParcelManagementItem } from '@models/parcel-management.models';
import { IS_LOCAL_API } from 'app/shared/constants/constant';

@Injectable()
export class MarbleRunApiService {
  private readonly apiService = inject(ApiService);

  localApiParcel = signal<ParcelManagementItem[]>([
      {
        id: 1,
        name: 'Parcel A',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Parcel B',
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

  ]);

  getParcelById(id: string | number): Observable<GetParcelByIdResponse> {
    if (IS_LOCAL_API) {
      const parcel = this.localApiParcel().find((item) => item.id === id);
      return new Observable<GetParcelByIdResponse>((observer) => {
        observer.next(parcel as unknown as GetParcelByIdResponse);
        observer.complete();
      });
    }
    return this.apiService.get(`parcel/${id.toString()}`);
  }
  createParcel(data: CreateParcelBody): Observable<CreateParcelResponse> {
    if (IS_LOCAL_API) {
      const newParcel: ParcelManagementItem = {
        id: this.localApiParcel().length + 1,
        name: data.name,
        quantity: data.volume,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.localApiParcel.update((state) => [...state, newParcel]);
      return new Observable<CreateParcelResponse>((observer) => {
        observer.next(newParcel as unknown as CreateParcelResponse);
        observer.complete();
      });
    }
    return this.apiService.post(`parcel`, data);
  }

  updateParcel(
    data: UpdateParcelBody,
    id: number | string
  ): Observable<UpdateParcelResponse> {
    if (IS_LOCAL_API) {
      const index = this.localApiParcel().findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedParcel: ParcelManagementItem = {
          ...this.localApiParcel()[index],
          name: data.name,
          quantity: data.volume,
          updatedAt: new Date(),
        };
        this.localApiParcel.update((state) => {
          const newState = [...state];
          newState[index] = updatedParcel;
          return newState;
        });
        return new Observable<UpdateParcelResponse>((observer) => {
          observer.next(updatedParcel as unknown as UpdateParcelResponse);
          observer.complete();
        });
      }
    }

    return this.apiService.put(`parcel/${id.toString()}`, data);
  }

  deleteParcel(id: number | string): Observable<void> {
    if (IS_LOCAL_API) {
      const index = this.localApiParcel().findIndex((item) => item.id === id);
      if (index !== -1) {
        this.localApiParcel.update((state) => {
          const newState = [...state];
          newState.splice(index, 1);
          return newState;
        });
        return new Observable<void>((observer) => {
          observer.next();
          observer.complete();
        });
      }
    }

    return this.apiService.delete(`parcel/${id.toString()}`, null);
  }
}
