import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";

registerBlockType("rochester-dev/full-span-image", {
  title: __("Full Span Image", "rochester-dev-content-blocks"),
  icon: "format-image",
  category: "rochester-dev",
  attributes: {
    imageUrl: {
      type: "string",
      default: "",
    },
    desktopHeight: {
      type: "string",
      default: "500px",
    },
    mobileHeight: {
      type: "string",
      default: "300px",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { imageUrl, desktopHeight, mobileHeight } = attributes;
    const blockProps = useBlockProps({
      className: "full-span-image",
    });

    const onSelectImage = (media) => {
      setAttributes({ imageUrl: media.url });
    };

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody
            title={__("Image Settings", "rochester-dev-content-blocks")}
          >
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <Button onClick={open} isSecondary>
                    {imageUrl
                      ? __("Change Image", "rochester-dev-content-blocks")
                      : __("Upload Image", "rochester-dev-content-blocks")}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            <TextControl
              label={__(
                "Desktop Height (e.g., 500px, 50vh)",
                "rochester-dev-content-blocks"
              )}
              value={desktopHeight}
              onChange={(newHeight) =>
                setAttributes({ desktopHeight: newHeight })
              }
            />
            <TextControl
              label={__(
                "Mobile Height (e.g., 300px, 30vh)",
                "rochester-dev-content-blocks"
              )}
              value={mobileHeight}
              onChange={(newHeight) =>
                setAttributes({ mobileHeight: newHeight })
              }
            />
          </PanelBody>
        </InspectorControls>
        {imageUrl ? (
          <div
            className="full-span-image-preview"
            style={{
              backgroundImage: `url(${imageUrl})`,
              height: desktopHeight,
            }}
          >
            {__(
              "Preview: Adjust height in the block settings",
              "rochester-dev-content-blocks"
            )}
          </div>
        ) : (
          <div className="full-span-image-placeholder">
            {__(
              "Upload an image to see the preview",
              "rochester-dev-content-blocks"
            )}
          </div>
        )}
      </div>
    );
  },
  save: ({ attributes }) => {
    const { imageUrl, desktopHeight, mobileHeight } = attributes;
    const blockProps = useBlockProps.save({
      className: "full-span-image",
    });
    console.log("Save attributes:", { imageUrl, desktopHeight, mobileHeight });

    return (
      <div
        {...blockProps}
        style={{
          backgroundImage: `url(${imageUrl})`,
          "--desktop-height": desktopHeight,
          "--mobile-height": mobileHeight,
        }}
        data-desktop-height={desktopHeight}
        data-mobile-height={mobileHeight}
      ></div>
    );
  },
});
