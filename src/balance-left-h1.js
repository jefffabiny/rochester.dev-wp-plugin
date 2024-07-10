import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

registerBlockType("rochester-dev/balance-left-h1", {
  title: __("Balance Left H1", "rochester-dev-content-blocks"),
  icon: "editor-alignleft",
  category: "rochester-dev",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "h1",
    },
    rightSpace: {
      type: "number",
      default: 50, // Default 50% space on the right
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { content, rightSpace } = attributes;
    const blockProps = useBlockProps({
      className: "balance-left-h1-block",
      style: { "--right-space": `${rightSpace}%` },
    });

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody
            title={__("Right Space Settings", "rochester-dev-content-blocks")}
          >
            <RangeControl
              label={__("Right Space (%)", "rochester-dev-content-blocks")}
              value={rightSpace}
              onChange={(newSpace) => setAttributes({ rightSpace: newSpace })}
              min={0}
              max={100}
            />
          </PanelBody>
        </InspectorControls>
        <RichText
          tagName="h1"
          value={content}
          onChange={(newContent) => setAttributes({ content: newContent })}
          placeholder={__(
            "Add your heading here...",
            "rochester-dev-content-blocks"
          )}
        />
      </div>
    );
  },
  save: ({ attributes }) => {
    const { content, rightSpace } = attributes;
    const blockProps = useBlockProps.save({
      className: "balance-left-h1-block",
      style: { "--right-space": `${rightSpace}%` },
    });

    return (
      <div {...blockProps}>
        <RichText.Content tagName="h1" value={content} />
      </div>
    );
  },
});
