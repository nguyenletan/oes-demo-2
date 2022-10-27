import styled from '@emotion/styled'

export const TimelineWrapper = styled.div`
  min-height: 145px;
  border: 1px solid rgba(39, 39, 39, 0.5);
  border-radius: 5px;
  width: 100%;
  padding: 19px 21px;
`

export const TimelineTitle = styled.h4`
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  margin: 0 0 27px 0;
  text-align: left;
  @media only screen and (max-width: 550px) {
    margin-bottom: 12px;
  }
  .title {
    padding-right: 0.4em;
    @media only screen and (max-width: 550px) {
      display: block;
      font-size: 16px;
      padding-bottom: 10px;
      font-weight: 600;
    }
  }
  .teaching-period {
    font-weight: 400;
    @media only screen and (max-width: 550px) {
      text-transform: capitalize;
      color: #525252;
      font-weight: 600;
    }
  }
  .current-week {
    @media only screen and (max-width: 550px) {
      text-transform: capitalize;
      font-weight: 600;
      color: #525252;
    }
  }
`

export const TimelineProgress = styled.progress`
  overflow: hidden;
  inline-size: 100%;
  -webkit-appearance: none;
  appearance: none;
  block-size: 7px;

  &::-webkit-progress-value {
    background: #57b598;
    border-radius: 5px;
    transition: all 0.8s ease-in-out;
  }

  &::-moz-progress-bar {
    background: #57b598;
    border-radius: 5px;
    transition: all 0.8s ease-in-out;
  }

  &::-webkit-progress-bar {
    background-color: #e3e4e4;
    border-radius: 5px;
  }
`

export const TimelineProgressWeeks = styled.ul`
  margin-top: 12px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-inline-start: 0;
  font-size: 10px;
  line-height: 14px;
  font-weight: 600;
  text-transform: capitalize;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`

export const TimelineProgressWeeksForMobile = styled.ul`
  margin-top: 7px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-inline-start: 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  text-transform: capitalize;
  color: #b0b0b0;

  .current {
    font-weight: 600;
    color: #000;
  }

  .upcoming {
    color: #272727;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const TimelineProgressWeek = styled.li`
  width: 100%;
  text-align: left;
  padding-left: 2px;
  @media only screen and (max-width: 1024px) {
    padding-left: 0;
  }
`

export const TimelineSpinners = styled.ul`
  margin-top: 0;
  margin-bottom: -10px;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-inline-start: 0;
`

export const TimelineSpinnerWrapper = styled.li`
  width: 100%;
  text-align: right;
  display: flex;
  padding-right: 1px;
  justify-content: flex-end;
  @media only screen and (max-width: 767px) {
    display: none;
  }

  .pin-group {
    display: flex;
  }

  .pin-group .pin {
    margin-left: -10px;
  }

  .pin-group .pin:nth-of-type(1) {
    z-index: 5;
    margin-left: 0;
  }

  .pin-group .pin:nth-of-type(2) {
    z-index: 4;
  }

  .pin-group .pin:nth-of-type(3) {
    z-index: 3;
  }

  .pin-group .pin:nth-of-type(4) {
    z-index: 2;
  }
`

export const TimelinePopup = styled.div`
  font-size: 10px;
  line-height: 14px;
  padding: 10px 16px;
  div {
    margin: 0;
    padding-bottom: 6px;
  }
  h6 {
    margin: 0;
    font-weight: 600;
    font-size: 10px;
    text-transform: capitalize;
  }

  svg {
    padding-top: 2px;
  }
`

export const TimelinePopupWrapper = styled.section`
  display: flex;
  justify-content: left;
  gap: 10px;
  align-items: flex-start;
`
