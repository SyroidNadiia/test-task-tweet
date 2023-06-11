import styled from 'styled-components';
import { Avatar, Typography } from '@mui/material';

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 308px;
  height: 396px;
  padding: 20px 36px 36px 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  &::after {
    content: '';
    position: absolute;
    top: 214px;
    right: 0;
    height: 8px;
    width: 100%;
    background-color: #ebd8ff;
    z-index: 0;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledAvatar = styled(Avatar)`
  object-fit: cover;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
`;

export const StyledInfo = styled.div`
  margin-top: auto;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Count = styled(Typography)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

const BaseButton = styled.button`
  width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  text-align: center;
  padding: 14px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  cursor: pointer;
`;

export const BtnFollow = styled(BaseButton)`
  background-color: #ebd8ff;
`;

export const BtnFollowing = styled(BaseButton)`
  background-color: #5cd3a8;
`;

export const StyledImgFollow = styled.img`
  width: 308px;
  height: 168px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledImgLogo = styled.img`
  width: 76px;
  height: 22px;
  margin-right: auto;
`;
