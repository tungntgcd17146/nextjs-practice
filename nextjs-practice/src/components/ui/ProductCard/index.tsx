'use client';

import { memo, useCallback, useMemo, useState } from 'react';

//mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

//components
import Rating from '@/src/components/ui/Rating';
import Branch1 from '@/public/assets/Brand1.webp';
import IconButton from '@/src/components/ui/IconButton';
import Chip from '@/src/components/ui/Chip';

import Image from 'next/image';

export interface Props {
  onEditCard?: (e: React.MouseEvent<HTMLElement>) => void;
  onDeleteCard?: (e: React.MouseEvent<HTMLElement>) => void;
  onViewCard?: (e: React.MouseEvent<HTMLElement>, id: number) => void;
  productName: string;
  productCategory: string;
  productPrice: number;
  productRating: number;
  productRatingCount: number;
  popularity?: string;
  id: number;
}

const imgIconCommonStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.primary.main,
  marginRight: '16px',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.info.main,
  },
});

const ProductCard = ({
  onEditCard,
  onDeleteCard,
  onViewCard,
  id,
  productName,
  productCategory,
  productPrice,
  productRating,
  productRatingCount,
}: Props) => {
  const [isExpandedCard, setIsExpandedCard] = useState(false);
  const theme = useTheme();

  const handleHoverCard = useCallback(() => {
    setIsExpandedCard(true);
  }, []);

  const handleLeaveCard = useCallback(() => {
    setIsExpandedCard(false);
  }, []);

  const handleEditCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onEditCard?.(e);
    },
    [onEditCard],
  );

  const handleDeleteCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onDeleteCard?.(e);
    },
    [onDeleteCard],
  );

  const handleViewCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onViewCard?.(e, id);
    },
    [id, onViewCard],
  );

  const EditIcon = useMemo(() => <EditOutlinedIcon />, []);
  const ViewIcon = useMemo(() => <ArrowForwardOutlinedIcon />, []);
  const DeleteIcon = useMemo(() => <DeleteOutlineOutlinedIcon />, []);

  return (
    <Card
      data-testid="ProductCard"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none',
        backgroundImage: 'none',
        margin: '32px 12px 0px 12px',
      }}
      onMouseEnter={handleHoverCard}
      onMouseLeave={handleLeaveCard}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          children={
            <Image
              style={{ borderRadius: '12px', objectFit: 'cover' }}
              src={Branch1}
              alt="brand img"
              fill
              sizes="100%"
            />
          }
          sx={{
            height: '200px',
            width: '100%',
            opacity: isExpandedCard ? 0.2 : 'none',
          }}
        />
        <Box
          hidden={!isExpandedCard}
          sx={{
            position: 'absolute',
            width: '100%',
            top: '40%',
            textAlign: 'center',
          }}
        >
          <IconButton
            disabled //not use for now
            aria-label="product-edit-icon"
            data-testid="ProductCard_IconButton_edit"
            children={EditIcon}
            sx={imgIconCommonStyle}
            onClick={handleEditCard}
          />
          <IconButton
            disabled //not use for now
            aria-label="product-delete-icon"
            data-testid="ProductCard_IconButton_delete"
            children={DeleteIcon}
            sx={imgIconCommonStyle}
            onClick={handleDeleteCard}
          />
          <IconButton
            aria-label="product-view-icon"
            data-testid="ProductCard_IconButton_view"
            children={ViewIcon}
            sx={imgIconCommonStyle}
            onClick={handleViewCard}
          />
        </Box>
      </Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '24px' /* 160% */,
              letterSpacing: '-0.15px',
              color: theme.palette.text.secondary,
              margin: 0,
            }}
          >
            {productName} ({productCategory})
          </p>

          <Chip price={productPrice} variant="filled" />
        </Box>
        <Rating ratingPoint={productRating} counter={productRatingCount} />
      </CardContent>
    </Card>
  );
};

export default memo(ProductCard);
