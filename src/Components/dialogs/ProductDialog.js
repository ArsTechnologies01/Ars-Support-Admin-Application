import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";

import dialog from "./dialog.module.css";
import image from "../../files/images/defaultProduct.png";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props?.open);
  }, [props?.open]);

  const handleClose = () => {
    setOpen(false);
  };

  const uploadImage = () => {};

  const removeImage = () => {};

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
        <DialogContent>
          <div className={dialog.dialogBody}>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Serial Number*
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Stock Count*
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className={dialog.dialogBody}>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Product Name*
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Product Serial No.(Optional)
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className={dialog.dialogBody}>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Group*
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
            <div className={dialog.inputSection}>
              <Typography
                variant="body1"
                size="small"
                fullWidth
                color="secondary"
              >
                Category*
              </Typography>
              <TextField
                fullWidth
                color="secondary"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Typography
              variant="body1"
              size="small"
              fullWidth
              color="secondary"
            >
              Message*
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              color="secondary"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className={dialog.dialogImage}>
            <CardMedia
              className={dialog.media}
              component="img"
              src={image}
              title="Product Image"
            />
            <Button onClick={uploadImage} variant="contained" color="primary">
              Upload
            </Button>
            <Button onClick={removeImage} variant="contained" color="secondary">
              Remove
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
