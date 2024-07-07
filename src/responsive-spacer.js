import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

registerBlockType("rochester-dev/responsive-spacer", {
  title: __("Responsive Spacer", "rochester-dev-content-blocks"),
  icon: "editor-expand",
  category: "rochester-dev",
  attributes: {
    desktopSpacing: {
      type: "string",
      default: "20px",
    },
    mobileSpacing: {
      type: "string",
      default: "10px",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { desktopSpacing, mobileSpacing } = attributes;
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody
            title={__("Spacer Settings", "rochester-dev-content-blocks")}
          >
            <TextControl
              label={__(
                "Desktop Spacing (e.g., 20px, 1em)",
                "rochester-dev-content-blocks"
              )}
              value={desktopSpacing}
              onChange={(newSpacing) =>
                setAttributes({ desktopSpacing: newSpacing })
              }
            />
            <TextControl
              label={__(
                "Mobile Spacing (e.g., 10px, 0.5em)",
                "rochester-dev-content-blocks"
              )}
              value={mobileSpacing}
              onChange={(newSpacing) =>
                setAttributes({ mobileSpacing: newSpacing })
              }
            />
          </PanelBody>
        </InspectorControls>
        <div
          className="responsive-spacer-preview"
          style={{ height: desktopSpacing }}
        >
          {__(
            "Preview: Adjust spacing in the block settings",
            "rochester-dev-content-blocks"
          )}
        </div>
      </div>
    );
  },
  save: ({ attributes }) => {
    const { desktopSpacing, mobileSpacing } = attributes;
    const blockProps = useBlockProps.save();

    return (
      <div
        {...blockProps}
        className="responsive-spacer"
        style={{
          "--desktop-spacing": desktopSpacing,
          "--mobile-spacing": mobileSpacing,
        }}
        data-desktop-spacing={desktopSpacing}
        data-mobile-spacing={mobileSpacing}
      />
    );
  },
});
