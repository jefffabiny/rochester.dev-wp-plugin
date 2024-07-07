import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

registerBlockType("rochester-dev/balance-left-h2", {
  title: __("Balance Left H2", "rochester-dev-content-blocks"),
  icon: "editor-alignleft",
  category: "rochester-dev",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    rightSpace: {
      type: "number",
      default: 50,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { content, rightSpace } = attributes;
    const blockProps = useBlockProps({
      className: "balance-left-h2-block",
    });

    return (
      <div
        {...blockProps}
        style={{ marginRight: `${rightSpace}%`, maxWidth: "2000px" }}
      >
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
          tagName="h2"
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
      className: "balance-left-h2-block",
    });

    return (
      <div
        {...blockProps}
        style={{ marginRight: `${rightSpace}%`, maxWidth: "2000px" }}
      >
        <RichText.Content tagName="h2" value={content} />
      </div>
    );
  },
});
