import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  useBlockProps,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

registerBlockType("rochester-dev/balance-left-p", {
  title: __("Balance Left P", "rochester-dev-content-blocks"),
  icon: "editor-alignleft",
  category: "rochester-dev",
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
    rightSpace: {
      type: "number",
      default: 50,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { content, rightSpace } = attributes;
    const blockProps = useBlockProps({
      className: "balance-left-p-block",
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
          tagName="p"
          value={content}
          onChange={(newContent) => setAttributes({ content: newContent })}
          placeholder={__(
            "Add your paragraph here...",
            "rochester-dev-content-blocks"
          )}
        />
      </div>
    );
  },
  save: ({ attributes }) => {
    const { content, rightSpace } = attributes;
    const blockProps = useBlockProps.save({
      className: "balance-left-p-block",
      style: { "--right-space": `${rightSpace}%` },
    });

    return (
      <div {...blockProps}>
        <RichText.Content tagName="p" value={content} />
      </div>
    );
  },
});
