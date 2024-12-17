import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from "../node_modules/@newjersey/njwds/dist/css/button.css?inline";

const SIZE_TO_CLASS = {
  scale: "nj-icon--size-scale",
  "3": "usa-icon--size-3",
  "4": "usa-icon--size-4",
  "5": "usa-icon--size-5",
};

type Size = "3" | "4" | "5" | "scale";

@customElement("nj-icon")
export class NjButton extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({ attribute: "icon-name" }) iconName!: string;
  @property() size: Size = "3";
  @property({ type: Boolean }) decorative: boolean = false;
  @property({ attribute: "icon-title" }) iconTitle?: string;

  private validateProps(): void {
    if (this.iconName == undefined || this.iconName.length === 0) {
      throw new Error(
        "<nj-icon> requires the `icon-name` attribute to be provided"
      );
    }
    if (!this.decorative && this.iconTitle == undefined) {
      throw Error(
        '<nj-icon>: missing the "iconTitle" prop. The "iconTitle" prop is required unless the "decorative" prop is set to true.'
      );
    }
  }

  render() {
    this.validateProps();

    const iconPath = `./assets/sprite.svg#${this.iconName}`;
    const classNames = `usa-icon ${SIZE_TO_CLASS[this.size]}`;
    const iconTitleId = crypto.randomUUID();

    return html`
      <svg
        class="${classNames}"
        aria-hidden="${ifDefined(this.decorative ? "true" : undefined)}"
        aria-labelledby="${ifDefined(
          this.decorative ? undefined : iconTitleId
        )}"
        focusable="false"
        role="img"
      >
        ${this.decorative
          ? ""
          : html`<title id="${iconTitleId}">
              ${this.iconTitle ?? this.iconName}
            </title>`}
        <use href="${iconPath}"></use>
      </svg>
    `;
  }
}
