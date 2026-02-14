
// Projects

export type ProjectParams = {
  count?: number;
  isActive?: boolean;
  isVisible?: boolean;
  excludeCode?: string;
  isMain?: boolean;
  statusId?: number;
};

export type ProjectCardTypes = {
  id: number;
  order?: number;
  code?: string;
  title?: string;
  budget?: number;
  currencyName?: string;
  isActive?: boolean;
  statusId: number;
};

export type ProjectCardProps = Omit<ProjectCardTypes, "id"> & {
  reverse?: boolean
}

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  currencyName: string;
  budget: number;
  categoryName: string;
  deadline: string;
  strategicGoal: string;
  isActive: boolean;
  statusId: number;
};

export type ProjectApplyType = {
  initiatorFullname: string;
  contactNumber: string;
  email: string;
  tin: string;
  note: string;
};

export interface ProjectApplyBodyType extends ProjectApplyType {
  token: string;
  projectId: number;
}

export type ProjectApplyErrors = {
  [K in keyof ProjectApplyType]?: string;
};

export type ProjectApplyInitialValueType = {
  errors: ProjectApplyErrors;
  values: ProjectApplyType | null;
};

export type ProjectStatisticsType = {
  activeProjects: number;
  finishedProjects: number;
  totalProjects: number;
};

export type ValidateProjectApplyModalReturnType = {
  isValid: boolean;
  data?: ProjectApplyInitialValueType;
};

// Offers Type
export type OfferType = {
  offerName: string;
  directionId: number;
  targetAudience: string;
  purpose: string;
  activitiesAndMilestones: string;
  startDate: string;
  endDate: string;
  proposedBudget: number;
  currencyId: number;
  images: File[];
  files: File[];
  initiatorFullname: string;
  initiatorContactNumber: string;
  initiatorEmail: string;
  initiatorTin: string;
};

export type OfferErrors = {
  [K in keyof OfferType]?: string;
};

export type OfferInitialValueType = {
  errors: OfferErrors;
  values: OfferType | null;
};

export type ValidateOfferModalReturnType = {
  isValid: boolean;
  data?: OfferInitialValueType;
};

//Parametrics
export type CurrencyType = {
  id: number;
  currencyName: string;
};

export type ProjectDirectionType = {
  id: number;
  directionName: string;
};

export type DirectionType = {
  id: number;
  code: string;
  directionName: string;
  imageUrl: string;
};

// Medias
export type MediaCardType = {
  id: number;
  code: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type MediaDataType = {
  haveNext: boolean;
  items: MediaCardType[];
};

export type MediaParams = {
  pageIndex?: number;
  pageCount?: number;
  excludeCode?: string;
};

// Media Detail
export type MediaImage = {
  id: number;
  isMain: boolean;
  imageUrl: string;
};

export type MediaDetailType = {
  id: number;
  title: string;
  description: string;
  images: MediaImage[];
};

// Partners
export type PartnerType = {
  id: number;
  code: string;
  name: string;
  imageUrl: string;
};


//About Us
export type AboutUsType = {
  title: string;
  description: string;
};
