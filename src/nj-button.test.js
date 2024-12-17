import { fixture, expect, assert } from "@open-wc/testing";
import "../dist/components/nj-button/nj-button";
import { html } from "lit/static-html.js";
import { NjButton } from "../dist/components/nj-button/nj-button";

describe("NjButton", () => {
  it("is defined", () => {
    const el = document.createElement("nj-button");
    assert.instanceOf(el, NjButton);
  });

  it("should render a primary button by default", async () => {
    const el = await fixture(html`<nj-button></nj-button>`);
    const button = el.shadowRoot?.querySelector("button");

    expect(button).to.have.class("usa-button");
    expect(button).to.not.have.class("usa-button--outline");
    expect(button).to.not.have.class("usa-button--unstyled");
  });

  it("should apply the secondary variant class", async () => {
    const el = await fixture(html`<nj-button variant="secondary"></nj-button>`);
    const button = el.shadowRoot?.querySelector("button");

    expect(button).to.have.class("usa-button--outline");
  });

  it("should apply the dark mode class", async () => {
    const el = await fixture(html`<nj-button mode="dark"></nj-button>`);
    const button = el.shadowRoot?.querySelector("button");

    expect(button).to.have.class("nj-button--primary-dark");
  });

  it("should render an icon when icon-name is provided", async () => {
    const el = await fixture(html`<nj-button icon-name="check"></nj-button>`);
    const icon = el.shadowRoot?.querySelector("nj-icon");

    expect(icon).to.exist;
    expect(icon).to.have.attribute("icon-name", "check");
  });

  it("should not render an icon if icon-name is not provided", async () => {
    const el = await fixture(html`<nj-button></nj-button>`);
    const icon = el.shadowRoot?.querySelector("nj-icon");

    expect(icon).to.not.exist;
  });

  it("should pass the correct icon position class", async () => {
    const el = await fixture(
      html`<nj-button icon-name="check" icon-position="leading"></nj-button>`
    );
    const icon = el.shadowRoot?.querySelector("nj-icon");

    expect(icon).to.have.class("margin-right-105");
  });

  it("styling applied", async () => {
    const el = await fixture(html`<nj-button></nj-button>`);
    await el.updateComplete;

    const button = el.shadowRoot?.querySelector("button");
    assert.equal(getComputedStyle(button).backgroundColor, "rgb(0, 118, 214)");
  });
});
