import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Task {
    title: string;
    description: string;
    completed: boolean;
}

@Component({
    selector: 'app-todos',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    @for(task of tasks; track $index){
  <div>{{task.title}}</div>
}


<button (click)="addTask()">Add new task</button>


    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description 1',
            completed: false
        }, {
            title: 'Task 2',
            description: 'Description 2',
            completed: true
        },
    ];
    s_task = signal<Task[]>

    ngOnInit() {
        setTimeout(() => {
            this.addTask()
        }, 1000);
    }
    addTask() {
        this.tasks.push({
            title: Date.now().toString(),
            description: 'task.description',
            completed: false
        });
    }
}
