import { UpdateToDoView } from './../../shared/models/update-to-do-view';
import { StateEnum } from './../../shared/models/enums/state-enum';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ToDoService } from 'src/app/shared/services/to-do.service';
import { ToDoTaskGetAllViewItem } from 'src/app/shared/models/to-do-task-get-all-view-item';
import { HomeBuilderConstants } from 'src/app/shared/models/home-builder.constants';

@Component({
  selector: 'app-home-builder',
  templateUrl: './home-builder.component.html',
  styleUrls: ['./home-builder.component.scss']
})
export class HomeBuilderComponent implements OnInit {
  public subscription: Subscription;
  public toDoList: ToDoTaskGetAllViewItem[] = [];
  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.getToDoList();
    timer(0, 50000).subscribe(() => this.getToDoList());
  }

  public getChipsColour(state: number): string {
    if (StateEnum.Final === state) {
      return HomeBuilderConstants.chipColorRed;
    }
    if (StateEnum.HighPrice === state) {
      return HomeBuilderConstants.chipColorYellow;
    }
    if (StateEnum.Medium === state) {
      return HomeBuilderConstants.chipColorGreen;
    }
  }
  public getEnumValue(state: number): string {
    return StateEnum[state];
  }

  public updateStatus(item: ToDoTaskGetAllViewItem) {
    const updatedTodo: UpdateToDoView = {
      id: item.id,
      isComppleted: !item.isComppleted
    };
    this.todoService.update(updatedTodo).subscribe(res => {
      if (res === true) {
        item.isComppleted = !item.isComppleted;
      }
    });
  }

  private getToDoList(): void {
    this.subscription = this.todoService.getAll().subscribe(res => {
      this.toDoList = res.toDos;
      this.subscription.unsubscribe();
    });
  }

}
