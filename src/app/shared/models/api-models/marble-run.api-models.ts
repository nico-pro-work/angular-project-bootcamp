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
  id: number;
  name: string;
  volume: number;
  owner: ParcelOwner;
}

export interface UpdateParcelBody {
  name: string;
  volume: number;
  owner: ParcelOwner;
}

/**
 * Delete Parcel interface
 */
export interface DeleteParcelResponse {
}
export interface DeleteParcelBody {
}

/**
 * Common Parcel interface
 */
export interface ParcelOwner {
  id?: string;
  name: string;
}
