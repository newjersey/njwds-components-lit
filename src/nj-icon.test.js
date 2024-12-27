import { fixture, expect, assert } from "@open-wc/testing";
import "../dist/components/nj-button/nj-button";
import { html } from "lit/static-html.js";
import { NjIcon } from "../dist/components/nj-icon/nj-icon";

describe("NjIcon", () => {
  it("is defined", () => {
    const el = document.createElement("nj-icon");
    assert.instanceOf(el, NjIcon);
  });

  it("throws an error if the icon-name is not provided", async () => {
    let errorThrown = null;

    try {
      await fixture(html`<nj-icon icon-title="default-title"></nj-icon>`);
    } catch (error) {
      errorThrown = error;
    }

    assert.isNotNull(errorThrown, "Expected an error to be thrown");
    assert.instanceOf(
      errorThrown,
      Error,
      "Expected the error to be an instance of Error"
    );
    assert.include(
      errorThrown.message,
      "<nj-icon> requires the `icon-name` attribute to be provided"
    );
  });

  it("throws an error if the icon is not defined as decorative and no icon title is provided", async () => {
    let errorThrown = null;

    try {
      await fixture(html`<nj-icon icon-name="default-name"></nj-icon>`);
    } catch (error) {
      errorThrown = error;
    }

    assert.isNotNull(errorThrown, "Expected an error to be thrown");
    assert.instanceOf(
      errorThrown,
      Error,
      "Expected the error to be an instance of Error"
    );
    assert.include(
      errorThrown.message,
      '<nj-icon>: missing the "iconTitle" prop. The "iconTitle" prop is required unless the "decorative" prop is set to true.'
    );
  });

  it("should render a size 3 icon by default when no size is provided", async () => {
    const el = await fixture(
      html`<nj-icon
        icon-name="default-name"
        icon-title="default-title"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg");

    expect(icon).to.have.class("usa-icon--size-3");
  });

  it("should render an icon with size 3 when specified", async () => {
    const el = await fixture(
      html`<nj-icon
        icon-name="default-name"
        icon-title="default-title"
        size="3"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg");

    expect(icon).to.have.class("usa-icon--size-3");
  });

  it("should render an icon with size 4 when specified", async () => {
    const el = await fixture(
      html`<nj-icon
        icon-name="default-name"
        icon-title="default-title"
        size="4"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg");

    expect(icon).to.have.class("usa-icon--size-4");
  });

  it("should render an icon with size 5 when specified", async () => {
    const el = await fixture(
      html`<nj-icon
        icon-name="default-name"
        icon-title="default-title"
        size="5"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg");

    expect(icon).to.have.class("usa-icon--size-5");
  });

  it("should render an icon with size scale when specified", async () => {
    const el = await fixture(
      html`<nj-icon
        icon-name="default-name"
        icon-title="default-title"
        size="scale"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg");

    expect(icon).to.have.class("nj-icon--size-scale");
  });

  it("should render a icon with the correct name and title", async () => {
    const expectedName = "expected-name";
    const expectedTitle = "expected-title";
    const el = await fixture(
      html`<nj-icon
        icon-name="${expectedName}"
        icon-title="${expectedTitle}"
      ></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg").querySelector("use");

    expect(icon).to.have.attribute(
      "href",
      `./assets/sprite.svg#${expectedName}`
    );

    const iconTitle = el.shadowRoot
      ?.querySelector("svg")
      .querySelector("title");

    expect(iconTitle).to.contain.text(expectedTitle);
  });

  it("should render a decorative button even if no title is provided", async () => {
    const expectedName = "expected-name";
    const el = await fixture(
      html`<nj-icon icon-name="${expectedName}" decorative="true"></nj-icon>`
    );
    const icon = el.shadowRoot?.querySelector("svg").querySelector("use");

    expect(icon).to.have.attribute(
      "href",
      `./assets/sprite.svg#${expectedName}`
    );
  });

  it("should render a decorative button with no title even if a title is provided", async () => {
    const expectedName = "expected-name";
    const el = await fixture(
      html`<nj-icon
        icon-name="${expectedName}"
        decorative="true"
        icon-title="title"
      ></nj-icon>`
    );

    const icon = el.shadowRoot?.querySelector("svg").querySelector("use");

    expect(icon).to.have.attribute(
      "href",
      `./assets/sprite.svg#${expectedName}`
    );

    const iconTitle = el.shadowRoot
      ?.querySelector("svg")
      .querySelector("title");

    expect(iconTitle).to.be.null;
  });
});
