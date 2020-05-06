import { TestBed } from '@angular/core/testing';

import { MockTaskService } from '../mock-task.service';
import { Swimlane } from 'src/app/board/models/swimlane.model';

describe('MockTaskService', () => {
  let service: MockTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling add lane updates correctly ', () => {
    // Arrange
    var taskList = service.generateData();
    var newLane = new Swimlane('test');

    // Act
    service.add(newLane);

    // Assert
    expect(service.get()).toEqual(taskList)
  });
});
