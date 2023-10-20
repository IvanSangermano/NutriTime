import React, { useEffect } from 'react';
import styles from './BasalMetabolicRate.module.css';
import { getHealthsWithUserIdAsync } from '../../redux/actions/healthAction';
import { useDispatch, useSelector } from 'react-redux';

export const BasalMetabolicRate = (userId) => {
  const dispatch = useDispatch();

  const { list: healths } = useSelector((state) => state.healths);

  useEffect(() => {
    dispatch(getHealthsWithUserIdAsync(userId.userId));
  }, []);

  var healthsOrdenDeFecha = healths?.sort((a, b) => {
    if (new Date(a.day).getTime() < new Date(b.day).getTime()) return 1;
    else return -1;
  });
  var actualHealthMacros = healthsOrdenDeFecha.find(
    (i) => i.macroCheck === true
  );

  return (
    healths[0]?.macroCheck == true && (
      <div className={styles.divBasal}>
        <h1 className={styles.h1}>Basal Metabolic Rate</h1>
        <div className={styles.divBasalASpan}>
          <span className={styles.basal}>
            {actualHealthMacros?.macros?.tmb?.toFixed(2)} Kilocalories
          </span>
        </div>
      </div>
    )
  );
};
