import { HttpHeaders, HttpParams } from "@angular/common/http";

interface OptionCommon {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    params?:
      | HttpParams
      | {
          [param: string]: string | string[];
        };
    reportProgress?: boolean;
    withCredentials?: boolean;
  }
  
export interface Option extends OptionCommon {
    observe?: 'body';
    responseType?: 'json';
  }
   
  export interface OptionBlob extends OptionCommon {
    observe: 'response';
    responseType: 'blob';
  }
   
  export interface OptionText extends OptionCommon {
    observe?: 'body';
    responseType: 'text';
  }
   
  export  interface OptionDelete extends OptionCommon {
    body?: any;
    observe?: 'body';
    responseType?: 'json';
  }