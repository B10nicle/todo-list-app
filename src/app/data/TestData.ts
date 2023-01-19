import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Leisure'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finance'},
    {id: 8, title: 'Gadgets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Car'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#E5E5E5'},
    {id: 2, title: 'Medium', color: '#85D1B2'},
    {id: 3, title: 'High', color: '#F1828D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2022-01-18')
    },
    {
      id: 2,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2022-01-18')
    },
    {
      id: 3,
      title: 'Залить бензин полный бак',
      completed: false,
      category: TestData.categories[7],
      date: new Date('2022-01-18')
    },
    {
      id: 4,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[6],
      date: new Date('2022-01-18')
    }
  ]

}
