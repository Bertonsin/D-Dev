import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-note-list',
  imports: [MatIconModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteListComponent {
  noteList = [
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    },
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    },
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    },
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    },
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    },
    {
      tag: 'Bug',
      title: 'Titulo',
      description: "Resolvi um bug muito louco hoje, tu não vai acreditar..."
    }
  ]
}
