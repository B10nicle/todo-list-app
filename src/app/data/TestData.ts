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
    {id: 1, title: 'Low'},
    {id: 2, title: 'Medium'},
    {id: 3, title: 'High'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Wash my car',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[9],
      date: new Date('2023-01-18')
    },
    {
      id: 2,
      title: 'Take a pill',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2023-01-19')
    },
    {
      id: 3,
      title: 'Buy a new phone',
      completed: false,
      category: TestData.categories[7],
      date: new Date('2023-01-15')
    },
    {
      id: 4,
      title: 'Transfer 10% from salary',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[6],
      date: new Date('2023-01-10')
    },
    {
      id: 5,
      title: 'Buy a fresh bread',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2023-01-11')
    },
    {
      id: 6,
      title: 'Go to the gym',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4],
      date: new Date('2023-01-12')
    },
    {
      id: 7,
      title: 'Draft an agreement',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[6],
      date: new Date('2023-01-13')
    },
    {
      id: 8,
      title: 'Go for a walk with friends',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[3],
      date: new Date('2023-01-11')
    },
    {
      id: 9,
      title: 'Learn rxjs',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2023-01-17')
    },
    {
      id: 10,
      title: 'Buy a present',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2023-01-19')
    },
    {
      id: 11,
      title: 'Track expenses',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[6],
      date: new Date('2023-01-02')
    },
    {
      id: 12,
      title: 'Buy water',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2023-01-01')
    },
  ]

}
