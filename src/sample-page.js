import { css, html, LitElement } from 'lit';
import '@brightspace-ui/core/components/inputs/input-textarea.js';

export class SamplePage extends LitElement {
  static get properties() {
    return {
      inputText: {
        type: String,
      },
      inputTextarea: {
        type: String,
      },
      pastedText: {
        type: String,
      },
      pastedTextarea: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      css`
				.container {
					display: flex;
					flex-direction: row;
          align-items: center;
				}
        .col-2{
          padding: 0 15px;
        }
			`,
    ];
  }

  constructor() {
    super();

    this.inputText = '';
    this.inputTextarea = '';
  }

  handleTextChange(e) {
    this.inputText = e.target.value;
  }

  handleTextareaChange(e) {
    this.inputTextarea = e.target.value;
  }

  handleClick(e) {
    this.pastedText = this.inputText;
    this.pastedTextarea = this.inputTextarea;
  }

  render() {
    return html`
    <div class="container">

      <div class="col-1">
        <div>
          <div><label for="inputText">Input:</label></div>
          <input 
            id="inputText"
            type="text"
            @change=${this.handleTextChange}
            placeholder="Type here..."
            value=${this.inputText}>
          </input>
        </div>
        </br>
        <d2l-input-textarea
          id="inputTextarea"
          label="D2L Textarea:"
          placeholder="Type here..."
          @change=${this.handleTextareaChange}>
        </d2l-input-textarea>
      </div>

      <div class="col-2">
        <button @click=${this.handleClick}>
          Copy & Paste
        </button>
      </div>

      <div class="col-3">
        <div> 
          <div><label for="pastedText">Pasted Input:</label></div>
          <input type="text" id="pastedText" value=${this.pastedText} readonly></input>
        </div>
        </br>
        <div>
          <div><label for="pastedTextarea">Pasted Textarea:</label></div>
          <textarea id="pastedTextarea" readonly>${this.pastedTextarea}</textarea>
        </div>
      </div>  
    
    </div>
    `;
  }
}
customElements.define('sample-page', SamplePage);
