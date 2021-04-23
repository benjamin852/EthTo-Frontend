import React, { useState } from 'react';
import { Grid, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
import { useStyles } from './styles.js';

const CampaignObjective = ({ objective, setParentCampaignSetupStep }) => {
  const classes = useStyles();

  const [selectedObjective, setSelectedObjective] = useState('');
  const [error, setError] = useState(false);

  const handleRadioChange = e => {
    setSelectedObjective(e.target.value);
    setError(false);
  };

  const submitCampaignObjective = () => {
    objective(selectedObjective);
    setParentCampaignSetupStep(2);
  };

  return (
    <div className={classes.CampaignObjective_custom_font}>
      <h2>Choose Campaign Objective</h2>
      <p>1. Campaign Objective</p>
      <form onSubmit={submitCampaignObjective}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={4}>
            <p>
              <strong className={classes.CampaignObjective_custom_font_heading}>Awareness</strong>
            </p>
            <FormControl component="awareness-objective-root" error={error}>
              <RadioGroup
                aria-label="awareness-objective"
                name="awareness-objective-radio-group"
                value={selectedObjective}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="singlePost" control={<Radio />} label="Single Post" />
                <FormControlLabel value="postViews" control={<Radio />} label="Views" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <p>
              <strong className={classes.CampaignObjective_custom_font_heading}>Engagement</strong>
            </p>
            <FormControl component="engagement-objective-root" error={error}>
              <RadioGroup
                aria-label="engagement-objective"
                name="engagement-objective-radio-group"
                value={selectedObjective}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="profileGrowth" control={<Radio />} label="Profile Growth" />
                <FormControlLabel value="likes" control={<Radio />} label="Likes" />
                <FormControlLabel value="comments" control={<Radio />} label="Comments" />
                <FormControlLabel value="shares" control={<Radio />} label="Shares" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <p>
              <strong className={classes.CampaignObjective_custom_font_heading}>Conversion</strong>
            </p>
            <FormControl component="campaign-objective-root" error={error}>
              <RadioGroup
                aria-label="conversion-objective"
                name="conversion-objective-radio-group"
                value={selectedObjective}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="webVisits" control={<Radio />} label="Website Visits" />
                <FormControlLabel value="atc" control={<Radio />} label="Add To Carts" />
                <FormControlLabel value="sales" control={<Radio />} label="Sales" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={6}>
            <Button onClick={() => setParentCampaignSetupStep(0)} variant="outlined" color="primary" size="small">
              Previous
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.CampaignObjective_align_right}>
            {selectedObjective ? (
              <Button type="submit" variant="contained" color="primary" size="small">
                Next
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CampaignObjective;
