import { User, UserProps } from '../model/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-mode': this.onSaveClick,
    };
  }
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSaveClick = (): void => {
    this.model.save();
  };
  template(): string {
    return `
        <div>
            <input placeholder="${this.model.get('name')}"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save user</button>
        </div>
    `;
  }
}
