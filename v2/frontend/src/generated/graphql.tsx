import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type About = {
  __typename?: 'About';
  binome?: Maybe<ComponentSectionSection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  header?: Maybe<ComponentHeaderHeaderAccueil>;
  introPresentation?: Maybe<ComponentSectionSection>;
  presentation?: Maybe<ComponentSectionSection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  titrePage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  binome?: InputMaybe<ComponentSectionSectionInput>;
  header?: InputMaybe<ComponentHeaderHeaderAccueilInput>;
  introPresentation?: InputMaybe<ComponentSectionSectionInput>;
  presentation?: InputMaybe<ComponentSectionSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  titrePage?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentFormCheckbox = {
  __typename?: 'ComponentFormCheckbox';
  checked?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
  input?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type ComponentFormCheckboxIconArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFormCheckboxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormCheckboxFiltersInput>>>;
  checked?: InputMaybe<BooleanFilterInput>;
  input?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFormCheckboxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormCheckboxFiltersInput>>>;
  placeholder?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentFormCheckboxInput = {
  checked?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<Scalars['String']>;
  placeholder?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentFormDevis = {
  __typename?: 'ComponentFormDevis';
  activiteEntreprise?: Maybe<ComponentFormInput>;
  besoinEntreprise?: Maybe<ComponentFormInput>;
  besoinEntrepriseCheckbox?: Maybe<Array<Maybe<ComponentFormCheckbox>>>;
  button1?: Maybe<Scalars['String']>;
  button2?: Maybe<Scalars['String']>;
  button3?: Maybe<Scalars['String']>;
  button4?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<ComponentFormSuccessMessage>;
  nomEntreprise?: Maybe<ComponentFormInput>;
  titre?: Maybe<Scalars['String']>;
};


export type ComponentFormDevisBesoinEntrepriseCheckboxArgs = {
  filters?: InputMaybe<ComponentFormCheckboxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFormDevisFiltersInput = {
  activiteEntreprise?: InputMaybe<ComponentFormInputFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFormDevisFiltersInput>>>;
  besoinEntreprise?: InputMaybe<ComponentFormInputFiltersInput>;
  besoinEntrepriseCheckbox?: InputMaybe<ComponentFormCheckboxFiltersInput>;
  button1?: InputMaybe<StringFilterInput>;
  button2?: InputMaybe<StringFilterInput>;
  button3?: InputMaybe<StringFilterInput>;
  button4?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<ComponentFormSuccessMessageFiltersInput>;
  nomEntreprise?: InputMaybe<ComponentFormInputFiltersInput>;
  not?: InputMaybe<ComponentFormDevisFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormDevisFiltersInput>>>;
  titre?: InputMaybe<StringFilterInput>;
};

export type ComponentFormDevisInput = {
  activiteEntreprise?: InputMaybe<ComponentFormInputInput>;
  besoinEntreprise?: InputMaybe<ComponentFormInputInput>;
  besoinEntrepriseCheckbox?: InputMaybe<Array<InputMaybe<ComponentFormCheckboxInput>>>;
  button1?: InputMaybe<Scalars['String']>;
  button2?: InputMaybe<Scalars['String']>;
  button3?: InputMaybe<Scalars['String']>;
  button4?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<ComponentFormSuccessMessageInput>;
  nomEntreprise?: InputMaybe<ComponentFormInputInput>;
  titre?: InputMaybe<Scalars['String']>;
};

export type ComponentFormInput = {
  __typename?: 'ComponentFormInput';
  id: Scalars['ID'];
  input: Scalars['String'];
  legend?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
};

export type ComponentFormInputFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormInputFiltersInput>>>;
  input?: InputMaybe<StringFilterInput>;
  legend?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFormInputFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormInputFiltersInput>>>;
  placeholder?: InputMaybe<StringFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  titre?: InputMaybe<StringFilterInput>;
};

export type ComponentFormInputInput = {
  id?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<Scalars['String']>;
  legend?: InputMaybe<Scalars['String']>;
  placeholder?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
  titre?: InputMaybe<Scalars['String']>;
};

export type ComponentFormSuccessMessage = {
  __typename?: 'ComponentFormSuccessMessage';
  id: Scalars['ID'];
  successMessage?: Maybe<Scalars['String']>;
};

export type ComponentFormSuccessMessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFormSuccessMessageFiltersInput>>>;
  not?: InputMaybe<ComponentFormSuccessMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFormSuccessMessageFiltersInput>>>;
  successMessage?: InputMaybe<StringFilterInput>;
};

export type ComponentFormSuccessMessageInput = {
  id?: InputMaybe<Scalars['ID']>;
  successMessage?: InputMaybe<Scalars['String']>;
};

export type ComponentHeaderEnSavoirPlus = {
  __typename?: 'ComponentHeaderEnSavoirPlus';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  text?: Maybe<Scalars['String']>;
};

export type ComponentHeaderEnSavoirPlusInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ComponentHeaderHeaderAccueil = {
  __typename?: 'ComponentHeaderHeaderAccueil';
  bg?: Maybe<UploadFileEntityResponse>;
  button?: Maybe<Scalars['String']>;
  enSavoirPlus?: Maybe<ComponentHeaderEnSavoirPlus>;
  id: Scalars['ID'];
  imageDeco?: Maybe<UploadFileEntityResponse>;
  paragraphe?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
  titrePage: Scalars['String'];
};

export type ComponentHeaderHeaderAccueilInput = {
  bg?: InputMaybe<Scalars['ID']>;
  button?: InputMaybe<Scalars['String']>;
  enSavoirPlus?: InputMaybe<ComponentHeaderEnSavoirPlusInput>;
  id?: InputMaybe<Scalars['ID']>;
  imageDeco?: InputMaybe<Scalars['ID']>;
  paragraphe?: InputMaybe<Scalars['String']>;
  titre?: InputMaybe<Scalars['String']>;
  titrePage?: InputMaybe<Scalars['String']>;
};

export type ComponentNavNav = {
  __typename?: 'ComponentNavNav';
  id: Scalars['ID'];
  lien?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ComponentNavNavFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavNavFiltersInput>>>;
  lien?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavNavFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavNavFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentNavNavInput = {
  id?: InputMaybe<Scalars['ID']>;
  lien?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionSection = {
  __typename?: 'ComponentSectionSection';
  board?: Maybe<Array<Maybe<ComponentUtilsBoard>>>;
  button?: Maybe<Scalars['String']>;
  button2?: Maybe<Scalars['String']>;
  carousel?: Maybe<ComponentUtilsCarousel>;
  competencesChris?: Maybe<Array<Maybe<ComponentUtilsCompetences>>>;
  competencesSab?: Maybe<Array<Maybe<ComponentUtilsCompetences>>>;
  flipCard?: Maybe<Array<Maybe<ComponentUtilsFlipCard>>>;
  id: Scalars['ID'];
  images?: Maybe<UploadFileRelationResponseCollection>;
  paragraphe?: Maybe<Scalars['String']>;
  paragrapheBis?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<ComponentUtilsServices>>>;
  titre2?: Maybe<Scalars['String']>;
  titre2bis?: Maybe<Scalars['String']>;
  titre3?: Maybe<Scalars['String']>;
  titre3bis?: Maybe<Scalars['String']>;
  titre4?: Maybe<Scalars['String']>;
  titre4bis?: Maybe<Scalars['String']>;
  titre5?: Maybe<Scalars['String']>;
};


export type ComponentSectionSectionBoardArgs = {
  filters?: InputMaybe<ComponentUtilsBoardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionSectionCompetencesChrisArgs = {
  filters?: InputMaybe<ComponentUtilsCompetencesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionSectionCompetencesSabArgs = {
  filters?: InputMaybe<ComponentUtilsCompetencesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionSectionFlipCardArgs = {
  filters?: InputMaybe<ComponentUtilsFlipCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionSectionImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionSectionServicesArgs = {
  filters?: InputMaybe<ComponentUtilsServicesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionSectionInput = {
  board?: InputMaybe<Array<InputMaybe<ComponentUtilsBoardInput>>>;
  button?: InputMaybe<Scalars['String']>;
  button2?: InputMaybe<Scalars['String']>;
  carousel?: InputMaybe<ComponentUtilsCarouselInput>;
  competencesChris?: InputMaybe<Array<InputMaybe<ComponentUtilsCompetencesInput>>>;
  competencesSab?: InputMaybe<Array<InputMaybe<ComponentUtilsCompetencesInput>>>;
  flipCard?: InputMaybe<Array<InputMaybe<ComponentUtilsFlipCardInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  paragraphe?: InputMaybe<Scalars['String']>;
  paragrapheBis?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<ComponentUtilsServicesInput>>>;
  titre2?: InputMaybe<Scalars['String']>;
  titre2bis?: InputMaybe<Scalars['String']>;
  titre3?: InputMaybe<Scalars['String']>;
  titre3bis?: InputMaybe<Scalars['String']>;
  titre4?: InputMaybe<Scalars['String']>;
  titre4bis?: InputMaybe<Scalars['String']>;
  titre5?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsBoard = {
  __typename?: 'ComponentUtilsBoard';
  bg?: Maybe<UploadFileEntityResponse>;
  icons?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID'];
  paragraphe?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
  titreVerso?: Maybe<Scalars['String']>;
};


export type ComponentUtilsBoardIconsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentUtilsBoardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsBoardFiltersInput>>>;
  not?: InputMaybe<ComponentUtilsBoardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsBoardFiltersInput>>>;
  paragraphe?: InputMaybe<StringFilterInput>;
  titre?: InputMaybe<StringFilterInput>;
  titreVerso?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsBoardInput = {
  bg?: InputMaybe<Scalars['ID']>;
  icons?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  paragraphe?: InputMaybe<Scalars['String']>;
  titre?: InputMaybe<Scalars['String']>;
  titreVerso?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsCarousel = {
  __typename?: 'ComponentUtilsCarousel';
  id: Scalars['ID'];
  item?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentUtilsCarouselItemArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentUtilsCarouselInput = {
  id?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentUtilsCompetences = {
  __typename?: 'ComponentUtilsCompetences';
  competence?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentUtilsCompetencesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsCompetencesFiltersInput>>>;
  competence?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsCompetencesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsCompetencesFiltersInput>>>;
};

export type ComponentUtilsCompetencesInput = {
  competence?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentUtilsCompetencesListe = {
  __typename?: 'ComponentUtilsCompetencesListe';
  competencesListe?: Maybe<Array<Maybe<ComponentUtilsCompetences>>>;
  id: Scalars['ID'];
};


export type ComponentUtilsCompetencesListeCompetencesListeArgs = {
  filters?: InputMaybe<ComponentUtilsCompetencesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentUtilsContact = {
  __typename?: 'ComponentUtilsContact';
  horaires?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lien?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
};

export type ComponentUtilsContactInput = {
  horaires?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lien?: InputMaybe<Scalars['String']>;
  mail?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsFlipCard = {
  __typename?: 'ComponentUtilsFlipCard';
  back?: Maybe<Scalars['String']>;
  front?: Maybe<Scalars['String']>;
  icons?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentUtilsFlipCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsFlipCardFiltersInput>>>;
  back?: InputMaybe<StringFilterInput>;
  front?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsFlipCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsFlipCardFiltersInput>>>;
};

export type ComponentUtilsFlipCardInput = {
  back?: InputMaybe<Scalars['String']>;
  front?: InputMaybe<Scalars['String']>;
  icons?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentUtilsReseaux = {
  __typename?: 'ComponentUtilsReseaux';
  icon?: Maybe<UploadFileEntityResponse>;
  iconHover?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  lien?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ComponentUtilsReseauxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsReseauxFiltersInput>>>;
  lien?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsReseauxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsReseauxFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsReseauxInput = {
  icon?: InputMaybe<Scalars['ID']>;
  iconHover?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  lien?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ComponentUtilsServices = {
  __typename?: 'ComponentUtilsServices';
  icons?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  legend?: Maybe<Scalars['String']>;
  paragraphe?: Maybe<Scalars['String']>;
};

export type ComponentUtilsServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentUtilsServicesFiltersInput>>>;
  legend?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentUtilsServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUtilsServicesFiltersInput>>>;
  paragraphe?: InputMaybe<StringFilterInput>;
};

export type ComponentUtilsServicesInput = {
  icons?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  legend?: InputMaybe<Scalars['String']>;
  paragraphe?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type DemandeDevi = {
  __typename?: 'DemandeDevi';
  createdAt?: Maybe<Scalars['DateTime']>;
  nomEntreprise?: Maybe<ComponentFormDevis>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DemandeDeviEntity = {
  __typename?: 'DemandeDeviEntity';
  attributes?: Maybe<DemandeDevi>;
  id?: Maybe<Scalars['ID']>;
};

export type DemandeDeviEntityResponse = {
  __typename?: 'DemandeDeviEntityResponse';
  data?: Maybe<DemandeDeviEntity>;
};

export type DemandeDeviEntityResponseCollection = {
  __typename?: 'DemandeDeviEntityResponseCollection';
  data: Array<DemandeDeviEntity>;
  meta: ResponseCollectionMeta;
};

export type DemandeDeviFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DemandeDeviFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nomEntreprise?: InputMaybe<ComponentFormDevisFiltersInput>;
  not?: InputMaybe<DemandeDeviFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DemandeDeviFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DemandeDeviInput = {
  nomEntreprise?: InputMaybe<ComponentFormDevisInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Devi = {
  __typename?: 'Devi';
  createdAt?: Maybe<Scalars['DateTime']>;
  devis?: Maybe<ComponentFormDevis>;
  header?: Maybe<ComponentHeaderHeaderAccueil>;
  preambule?: Maybe<ComponentSectionSection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  titrePage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeviEntity = {
  __typename?: 'DeviEntity';
  attributes?: Maybe<Devi>;
  id?: Maybe<Scalars['ID']>;
};

export type DeviEntityResponse = {
  __typename?: 'DeviEntityResponse';
  data?: Maybe<DeviEntity>;
};

export type DeviInput = {
  devis?: InputMaybe<ComponentFormDevisInput>;
  header?: InputMaybe<ComponentHeaderHeaderAccueilInput>;
  preambule?: InputMaybe<ComponentSectionSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  titrePage?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  button?: Maybe<Scalars['String']>;
  contact?: Maybe<ComponentUtilsContact>;
  copyright?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<UploadFileEntityResponse>;
  nav?: Maybe<Array<Maybe<ComponentNavNav>>>;
  paragraphe?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reseaux?: Maybe<Array<Maybe<ComponentUtilsReseaux>>>;
  titre4?: Maybe<Scalars['String']>;
  titre4bis?: Maybe<Scalars['String']>;
  titre4quarto?: Maybe<Scalars['String']>;
  titre4tierce?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterNavArgs = {
  filters?: InputMaybe<ComponentNavNavFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterReseauxArgs = {
  filters?: InputMaybe<ComponentUtilsReseauxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  button?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<ComponentUtilsContactInput>;
  copyright?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  nav?: InputMaybe<Array<InputMaybe<ComponentNavNavInput>>>;
  paragraphe?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reseaux?: InputMaybe<Array<InputMaybe<ComponentUtilsReseauxInput>>>;
  titre4?: InputMaybe<Scalars['String']>;
  titre4bis?: InputMaybe<Scalars['String']>;
  titre4quarto?: InputMaybe<Scalars['String']>;
  titre4tierce?: InputMaybe<Scalars['String']>;
};

export type GenericMorph = About | ComponentFormCheckbox | ComponentFormDevis | ComponentFormInput | ComponentFormSuccessMessage | ComponentHeaderEnSavoirPlus | ComponentHeaderHeaderAccueil | ComponentNavNav | ComponentSectionSection | ComponentUtilsBoard | ComponentUtilsCarousel | ComponentUtilsCompetences | ComponentUtilsCompetencesListe | ComponentUtilsContact | ComponentUtilsFlipCard | ComponentUtilsReseaux | ComponentUtilsServices | DemandeDevi | Devi | Footer | Hamburger | Home | I18NLocale | Logo | Prestation | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Hamburger = {
  __typename?: 'Hamburger';
  createdAt?: Maybe<Scalars['DateTime']>;
  hamburger: UploadFileRelationResponseCollection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HamburgerHamburgerArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HamburgerEntity = {
  __typename?: 'HamburgerEntity';
  attributes?: Maybe<Hamburger>;
  id?: Maybe<Scalars['ID']>;
};

export type HamburgerEntityResponse = {
  __typename?: 'HamburgerEntityResponse';
  data?: Maybe<HamburgerEntity>;
};

export type HamburgerInput = {
  hamburger?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Home = {
  __typename?: 'Home';
  createdAt?: Maybe<Scalars['DateTime']>;
  header: ComponentHeaderHeaderAccueil;
  mission?: Maybe<ComponentSectionSection>;
  nous?: Maybe<ComponentSectionSection>;
  pourquoi?: Maybe<ComponentSectionSection>;
  projet?: Maybe<ComponentSectionSection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  realisations?: Maybe<ComponentSectionSection>;
  services?: Maybe<ComponentSectionSection>;
  titrePage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valeurs?: Maybe<ComponentSectionSection>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  header?: InputMaybe<ComponentHeaderHeaderAccueilInput>;
  mission?: InputMaybe<ComponentSectionSectionInput>;
  nous?: InputMaybe<ComponentSectionSectionInput>;
  pourquoi?: InputMaybe<ComponentSectionSectionInput>;
  projet?: InputMaybe<ComponentSectionSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  realisations?: InputMaybe<ComponentSectionSectionInput>;
  services?: InputMaybe<ComponentSectionSectionInput>;
  titrePage?: InputMaybe<Scalars['String']>;
  valeurs?: InputMaybe<ComponentSectionSectionInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Logo = {
  __typename?: 'Logo';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo: UploadFileRelationResponseCollection;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LogoLogoArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LogoEntity = {
  __typename?: 'LogoEntity';
  attributes?: Maybe<Logo>;
  id?: Maybe<Scalars['ID']>;
};

export type LogoEntityResponse = {
  __typename?: 'LogoEntityResponse';
  data?: Maybe<LogoEntity>;
};

export type LogoInput = {
  logo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDemandeDevi?: Maybe<DemandeDeviEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteDemandeDevi?: Maybe<DemandeDeviEntityResponse>;
  deleteDevi?: Maybe<DeviEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHamburger?: Maybe<HamburgerEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteLogo?: Maybe<LogoEntityResponse>;
  deletePrestation?: Maybe<PrestationEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateDemandeDevi?: Maybe<DemandeDeviEntityResponse>;
  updateDevi?: Maybe<DeviEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHamburger?: Maybe<HamburgerEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateLogo?: Maybe<LogoEntityResponse>;
  updatePrestation?: Maybe<PrestationEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateDemandeDeviArgs = {
  data: DemandeDeviInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteDemandeDeviArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
};


export type MutationUpdateDemandeDeviArgs = {
  data: DemandeDeviInput;
  id: Scalars['ID'];
};


export type MutationUpdateDeviArgs = {
  data: DeviInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateHamburgerArgs = {
  data: HamburgerInput;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateLogoArgs = {
  data: LogoInput;
};


export type MutationUpdatePrestationArgs = {
  data: PrestationInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Prestation = {
  __typename?: 'Prestation';
  createdAt?: Maybe<Scalars['DateTime']>;
  expertise?: Maybe<ComponentSectionSection>;
  header?: Maybe<ComponentHeaderHeaderAccueil>;
  methodologie?: Maybe<ComponentSectionSection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  titrePage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrestationEntity = {
  __typename?: 'PrestationEntity';
  attributes?: Maybe<Prestation>;
  id?: Maybe<Scalars['ID']>;
};

export type PrestationEntityResponse = {
  __typename?: 'PrestationEntityResponse';
  data?: Maybe<PrestationEntity>;
};

export type PrestationInput = {
  expertise?: InputMaybe<ComponentSectionSectionInput>;
  header?: InputMaybe<ComponentHeaderHeaderAccueilInput>;
  methodologie?: InputMaybe<ComponentSectionSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  titrePage?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  demandeDevi?: Maybe<DemandeDeviEntityResponse>;
  demandeDevis?: Maybe<DemandeDeviEntityResponseCollection>;
  devi?: Maybe<DeviEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  hamburger?: Maybe<HamburgerEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  logo?: Maybe<LogoEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  prestation?: Maybe<PrestationEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDemandeDeviArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDemandeDevisArgs = {
  filters?: InputMaybe<DemandeDeviFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDeviArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHamburgerArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLogoArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPrestationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type DevisBesoinEntrepriseCheckboxQueryVariables = Exact<{ [key: string]: never; }>;


export type DevisBesoinEntrepriseCheckboxQuery = { __typename?: 'Query', devi?: { __typename?: 'DeviEntityResponse', data?: { __typename?: 'DeviEntity', attributes?: { __typename?: 'Devi', devis?: { __typename?: 'ComponentFormDevis', besoinEntrepriseCheckbox?: Array<{ __typename?: 'ComponentFormCheckbox', id: string, checked?: boolean | null, placeholder?: string | null, input?: string | null, text?: string | null, icon?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', width?: number | null, height?: number | null, url: string } | null }> } | null } | null> | null } | null } | null } | null } | null };


export const DevisBesoinEntrepriseCheckboxDocument = gql`
    query DevisBesoinEntrepriseCheckbox {
  devi {
    data {
      attributes {
        devis {
          besoinEntrepriseCheckbox(pagination: {start: 0, limit: 30}) {
            id
            checked
            placeholder
            icon {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
            input
            text
          }
        }
      }
    }
  }
}
    `;

/**
 * __useDevisBesoinEntrepriseCheckboxQuery__
 *
 * To run a query within a React component, call `useDevisBesoinEntrepriseCheckboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevisBesoinEntrepriseCheckboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevisBesoinEntrepriseCheckboxQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevisBesoinEntrepriseCheckboxQuery(baseOptions?: Apollo.QueryHookOptions<DevisBesoinEntrepriseCheckboxQuery, DevisBesoinEntrepriseCheckboxQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DevisBesoinEntrepriseCheckboxQuery, DevisBesoinEntrepriseCheckboxQueryVariables>(DevisBesoinEntrepriseCheckboxDocument, options);
      }
export function useDevisBesoinEntrepriseCheckboxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevisBesoinEntrepriseCheckboxQuery, DevisBesoinEntrepriseCheckboxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DevisBesoinEntrepriseCheckboxQuery, DevisBesoinEntrepriseCheckboxQueryVariables>(DevisBesoinEntrepriseCheckboxDocument, options);
        }
export type DevisBesoinEntrepriseCheckboxQueryHookResult = ReturnType<typeof useDevisBesoinEntrepriseCheckboxQuery>;
export type DevisBesoinEntrepriseCheckboxLazyQueryHookResult = ReturnType<typeof useDevisBesoinEntrepriseCheckboxLazyQuery>;
export type DevisBesoinEntrepriseCheckboxQueryResult = Apollo.QueryResult<DevisBesoinEntrepriseCheckboxQuery, DevisBesoinEntrepriseCheckboxQueryVariables>;