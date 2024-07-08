import { ShopSelect } from '@/src/types/shopFilter';
import { Checkbox as CheckboxType } from '@/src/types/checkbox';

const checkboxOptions: CheckboxType[] = [
  {
    id: '1',
    label: 'UI Kit',
    labelPlacement: 'start',
    isChecked: false,
  },
  {
    id: '2',
    label: 'IIIustration',
    labelPlacement: 'start',
    isChecked: false,
  },
  {
    id: '3',
    label: 'Wireframe Kit',
    labelPlacement: 'start',
    isChecked: false,
  },
  {
    id: '4',
    label: 'Icons',
    labelPlacement: 'start',
    isChecked: false,
  },
];

const ratingSelect = [
  { id: '1', name: '1 and up', value: '1' },
  { id: '2', name: '2 and up', value: '2' },
  { id: '3', name: '3 and up', value: '3' },
  { id: '4', name: '4 and up', value: '4' },
  { id: '5', name: '5', value: '5' },
];

const sortBySelect = [
  { id: '1', name: 'Feature', value: 'Feature' },
  { id: '2', name: 'List', value: 'List' },
  { id: '3', name: 'New', value: 'New' },
];

export const selectOption = [
  {
    id: '0',
    name: ShopSelect.ALL,
    value: ShopSelect.ALL,
  },
  {
    id: '1',
    name: ShopSelect.RECENT,
    value: ShopSelect.RECENT,
  },
  {
    id: '2',
    name: ShopSelect.NEW,
    value: ShopSelect.NEW,
  },
  {
    id: '3',
    name: ShopSelect.POPULAR,
    value: ShopSelect.POPULAR,
  },
];

export { checkboxOptions, ratingSelect, sortBySelect };
