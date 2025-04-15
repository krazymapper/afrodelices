import { Recipe } from '@/types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Thieboudienne',
    description: 'Le plat national sénégalais à base de riz, de poisson et de légumes, connu pour ses propriétés nutritives et son goût unique.',
    geographicalArea: 'West Africa',
    mealType: ['Lunch', 'Dinner'],
    therapeuticProperties: ['Riche en protéines', 'Oméga-3', 'Vitamines'],
    image: '/images/thieboudienne.jpg'
  },
  {
    id: '2',
    name: 'Ravitoto',
    description: 'Un plat traditionnel malgache à base de feuilles de manioc pilées, généralement servi avec du porc et du riz.',
    geographicalArea: 'Madagascar',
    mealType: ['Dinner'],
    therapeuticProperties: ['Riche en fer', 'Antioxydants'],
    image: '/images/ravitoto.jpg'
  },
  {
    id: '3',
    name: 'Yassa',
    description: 'Un délicieux plat sénégalais à base de poulet mariné aux oignons et au citron, accompagné de riz.',
    geographicalArea: 'West Africa',
    mealType: ['Lunch', 'Dinner'],
    therapeuticProperties: ['Vitamine C', 'Protéines maigres'],
    image: '/images/yassa.jpg'
  }
]; 