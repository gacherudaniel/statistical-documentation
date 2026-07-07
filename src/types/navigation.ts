export type MainMenuItem = 'quality' | 'metadata';

export type QualitySubItem = 'code-of-practice' | 'kesqaf' | 'kspm';

export type MetadataSubItem = 
  | 'quality-reports' 
  | 'classification-national' 
  | 'classification-international'
  | 'compendium';

export interface NavigationItem {
  id: string;
  label: string;
  children?: NavigationItem[];
  path?: string;
}

export const NAVIGATION_STRUCTURE: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'quality',
    label: 'Quality',
    children: [
      { id: 'code-of-practice', label: 'Code of Practice', path: '/quality/code-of-practice' },
      { id: 'kesqaf', label: 'KeSQAF', path: '/quality/kesqaf' },
      { id: 'kspm', label: 'KSPM', path: '/quality/kspm' },
    ],
  },
  {
    id: 'metadata',
    label: 'Metadata',
    children: [
      { 
        id: 'quality-reports', 
        label: 'Quality Reports',
        children: [
          { 
            id: 'poverty-inequality-report', 
            label: 'Poverty & Inequality Statistics', 
            path: '/metadata/quality-reports?product=poverty-inequality' 
          },
          { 
            id: 'cpi-report', 
            label: 'Consumer Price Index (CPI)', 
            path: '/metadata/quality-reports?product=cpi' 
          },
        ],
      },
      { 
        id: 'classification', 
        label: 'Classification',
        children: [
          { id: 'classification-international', label: 'International', path: '/metadata/classification/international' },
          { id: 'classification-national', label: 'National', path: '/metadata/classification/national' },
        ],
      },
      { id: 'compendium', label: 'Compendium', path: '/metadata/compendium' },
    ],
  },
];