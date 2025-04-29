/**
 * Get Parcel interface
 */

export interface GetParcelByIdResponse {
  id: string;
}

/**
 * Create Parcel interface
 */
export interface CreateParcelResponse {
  id: number;
  name: string;
  volume: number;
  owner: ParcelOwner;
}

export interface CreateParcelBody {
  name: string;
  volume: number;
  owner: ParcelOwner;
}

/**
 * Update Parcel interface
 */
export interface UpdateParcelResponse {
  id: string;
}

export interface UpdateParcelBody {
  id: string;
}

/**
 * Delete Parcel interface
 */
export interface DeleteParcelResponse {
  id: string;
}
export interface DeleteParcelBody {
  id: string;
}

/**
 * Common Parcel interface
 */
export interface ParcelOwner {
  id?: string;
  name: string;
}
