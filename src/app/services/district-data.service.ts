import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DistrictDataService {

  constructor() { 
    
  }
   distData = [
    {
      districtCode: 344,
      districtName: "ANUGUL",
      odiaDistrictName: "ଅନୁଗୋଳ",
      recordStatus: 1,
    },
    {
      districtCode: 345,
      districtName: "BALANGIR",
      odiaDistrictName: "ବଲାଙ୍ଗିର",
      recordStatus: 1,
    },
    {
      districtCode: 346,
      districtName: "BALESHWAR",
      odiaDistrictName: "ବାଲେଶ୍ଵର",
      recordStatus: 1,
    },
    {
      districtCode: 347,
      districtName: "BARGARH",
      odiaDistrictName: "ବରଗଡ଼",
      recordStatus: 1,
    },
    {
      districtCode: 348,
      districtName: "BHADRAK",
      odiaDistrictName: "ଭଦ୍ରକ",
      recordStatus: 1,
    },
    {
      districtCode: 349,
      districtName: "BOUDH",
      odiaDistrictName: "ବୌଦ୍ଧ",
      recordStatus: 1,
    },
    {
      districtCode: 350,
      districtName: "CUTTACK",
      odiaDistrictName: "କଟକ",
      recordStatus: 1,
    },
    {
      districtCode: 351,
      districtName: "DEOGARH",
      odiaDistrictName: "ଦେବଗଡ",
      recordStatus: 1,
    },
    {
      districtCode: 352,
      districtName: "DHENKANAL",
      odiaDistrictName: "ଢ଼େଙ୍କାନାଳ",
      recordStatus: 1,
    },
    {
      districtCode: 353,
      districtName: "GAJAPATI",
      odiaDistrictName: "ଗଜପତି",
      recordStatus: 1,
    },
    {
      districtCode: 354,
      districtName: "GANJAM",
      odiaDistrictName: "ଗଂଜାମ",
      recordStatus: 1,
    },
    {
      districtCode: 355,
      districtName: "JAGATSINGHAPUR",
      odiaDistrictName: "ଜଗତସିଂହପୁର",
      recordStatus: 1,
    },
    {
      districtCode: 356,
      districtName: "JAJAPUR",
      odiaDistrictName: "ଯାଜପୁର",
      recordStatus: 1,
    },
    {
      districtCode: 357,
      districtName: "JHARSUGUDA",
      odiaDistrictName: "ଝାରସୁଗୁଡ଼ା",
      recordStatus: 1,
    },
    {
      districtCode: 358,
      districtName: "KALAHANDI",
      odiaDistrictName: "କଳାହାଣ୍ଡି",
      recordStatus: 1,
    },
    {
      districtCode: 359,
      districtName: "KANDHAMAL",
      odiaDistrictName: "କନ୍ଧମାଳ",
      recordStatus: 1,
    },
    {
      districtCode: 360,
      districtName: "KENDRAPARA",
      odiaDistrictName: "କେନ୍ଦ୍ରାପଡା",
      recordStatus: 1,
    },
    {
      districtCode: 361,
      districtName: "KENDUJHAR",
      odiaDistrictName: "କେନ୍ଦୁଝର",
      recordStatus: 1,
    },
    {
      districtCode: 362,
      districtName: "KHURDHA",
      odiaDistrictName: "ଖୋର୍ଦ୍ଧା",
      recordStatus: 1,
    },
    {
      districtCode: 363,
      districtName: "KORAPUT",
      odiaDistrictName: "କୋରାପୁଟ",
      recordStatus: 1,
    },
    {
      districtCode: 364,
      districtName: "MALKANGIRI",
      odiaDistrictName: "ମାଲକାନଗିରି",
      recordStatus: 1,
    },
    {
      districtCode: 365,
      districtName: "MAYURBHANJ",
      odiaDistrictName: "ମୟୂରଭଞ୍ଜ",
      recordStatus: 1,
    },
    {
      districtCode: 366,
      districtName: "NABARANGPUR",
      odiaDistrictName: "ନବରଂଗପୁର",
      recordStatus: 1,
    },
    {
      districtCode: 367,
      districtName: "NAYAGARH",
      odiaDistrictName: "ନୟାଗଡ",
      recordStatus: 1,
    },
    {
      districtCode: 368,
      districtName: "NUAPADA",
      odiaDistrictName: "ନୂଆପଡ଼ା",
      recordStatus: 1,
    },
    {
      districtCode: 369,
      districtName: "PURI",
      odiaDistrictName: "ପୁରୀ",
      recordStatus: 1,
    },
    {
      districtCode: 370,
      districtName: "RAYAGADA",
      odiaDistrictName: "ରାୟଗଡା",
      recordStatus: 1,
    },
    {
      districtCode: 371,
      districtName: "SAMBALPUR",
      odiaDistrictName: "ସମ୍ବଲପୁର",
      recordStatus: 1,
    },
    {
      districtCode: 372,
      districtName: "SONEPUR",
      odiaDistrictName: "ସୁବର୍ଣ୍ଣପୁର",
      recordStatus: 1,
    },
    {
      districtCode: 373,
      districtName: "SUNDARGARH",
      odiaDistrictName: "ସୁନ୍ଦରଗଡ଼",
      recordStatus: 1,
    },
  ];
  

  distInfo(){
    
    return this.distData;
  }
}
