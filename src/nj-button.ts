import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "../node_modules/@newjersey/njwds/dist/css/button.css?inline";
import { ifDefined } from "lit/directives/if-defined.js";

type Mode = "light" | "dark" | "danger";
type ButtonVariant = "primary" | "secondary" | "link";
type IconPosition = "leading" | "trailing" | "icon-only";

const getLightModeVariantClassName = (variant: ButtonVariant): string => {
  switch (variant) {
    case "primary":
      return "";
    case "secondary":
      return "usa-button--outline";
    case "link":
      return "usa-button--unstyled";
  }
};

const getDarkModeVariantClassName = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "nj-button--primary-dark";
    case "secondary":
      return "usa-button--outline usa-button--inverse";
    case "link":
      return "usa-button--unstyled nj-button--unstyled-dark";
    default:
      return "nj-button--primary-dark";
  }
};

const getDangerModeVariantClassName = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "usa-button--secondary";
    case "secondary":
      return "usa-button--outline nj-button--outline-danger";
    case "link":
      return "usa-button--unstyled nj-button--unstyled-danger";
    default:
      return getLightModeVariantClassName(variant);
  }
};

@customElement("nj-button")
export class NjButton extends LitElement {
  static styles = [unsafeCSS(style)];

  @property() variant: ButtonVariant = "primary";
  @property() mode: Mode = "light";
  @property({ attribute: "icon-name" }) iconName?: string;
  @property({ attribute: "icon-position" }) iconPosition: IconPosition =
    "leading";
  @property({ attribute: "icon-title" }) iconTitle?: string;

  private getButtonClassName(): string {
    let className: string;
    switch (this.mode) {
      case "light":
        className = getLightModeVariantClassName(this.variant);
        break;
      case "dark":
        className = getDarkModeVariantClassName(this.variant);
        break;
      case "danger":
        className = getDangerModeVariantClassName(this.variant);
        break;
      default:
        className = getLightModeVariantClassName(this.variant);
    }

    return `usa-button ${className} ${this.iconName ? "nj-button--icon" : ""}`;
  }

  private renderIcon() {
    if (!this.iconName) {
      return null;
    }

    let className = "";
    if (this.variant !== "link") {
      switch (this.iconPosition) {
        case "icon-only":
          break;
        case "leading":
          className = " margin-right-105";
          break;
        case "trailing":
          className = " margin-left-105";
          break;
      }
    }

    return html`<nj-icon
      class="${ifDefined(className.length > 0 ? className : undefined)}"
      size="${this.variant === "link" ? "scale" : "3"}"
      icon-name="${this.iconName}"
      ?decorative="${this.iconPosition !== "icon-only"}"
      icon-title="${ifDefined(this.iconTitle)}"
    ></nj-icon>`;
  }

  render() {
    const buttonClassName = this.getButtonClassName();

    return html` <button class="${buttonClassName}">
      ${this.iconPosition === "leading" || this.iconPosition === "icon-only"
        ? this.renderIcon()
        : null}
      <slot></slot>
      ${this.iconPosition === "trailing" ? this.renderIcon() : null}
    </button>`;
  }
}
