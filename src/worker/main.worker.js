import Wallet from '@myx0m0p/tcp-wallet-lib';
import ecc from 'eosjs-ecc';
import registerPromiseWorker from 'promise-worker/register';
import { getBlockchainApiEndpoint, getBlockchainHistoryEndpoint } from '../utils/config';
import {
  getActivePrivateKey,
  getSocialPrivateKeyByActiveKey,
  getPublicKeyByPrivateKey,
  getOwnerPrivateKey,
  getActiveKeyByOwnerKey,
} from '../utils/keys';
import * as actions from './actions';

const {
  ConfigService, SocialKeyApi, SocialApi, ContentApi, WalletApi, MultiSignatureApi, ContentPublicationsActionsApi,
} = Wallet;

const {
  ContentInteractionsApi, PublicationsApi, OrganizationsApi,
} = Wallet.Content;

ConfigService.init({
  apiEndpoint: getBlockchainApiEndpoint(),
  historyEndpoint: getBlockchainHistoryEndpoint(),
  calculatorEndpoint: getBlockchainApiEndpoint(),
});

registerPromiseWorker((action) => {
  switch (action.type) {
    case actions.GET_ACTIVE_KEY_BY_BRAINKEY:
      return getActivePrivateKey(...action.args);

    case actions.GET_SOCIAL_KEY_BY_ACTIVE_KEY:
      return getSocialPrivateKeyByActiveKey(...action.args);

    case actions.GET_PUBLIC_KEY_BY_PRIVATE_KEY:
      return getPublicKeyByPrivateKey(...action.args);

    case actions.GET_OWNER_KEY_BY_BRAINKEY:
      return getOwnerPrivateKey(...action.args);

    case actions.GET_ACTIVE_KEY_BY_OWNER_KEY:
      return getActiveKeyByOwnerKey(...action.args);

    case actions.ECC_SIGN:
      return ecc.sign(...action.args);

    case actions.BIND_SOCIAL_KEY_WITH_SOCIAL_PERMISSIONS:
      return SocialKeyApi.bindSocialKeyWithSocialPermissions(...action.args);

    case actions.ADD_SOCIAL_PERMISSIONS_TO_EMISSION_AND_PROFILE:
      return SocialKeyApi.addSocialPermissionsToEmissionAndProfile(...action.args);

    case actions.GET_UPVOTE_CONTENT_SIGNED_TRANSACTION:
      return ContentInteractionsApi.getUpvoteContentSignedTransaction(...action.args);

    case actions.GET_DOWNVOTE_CONTENT_SIGNED_TRANSACTION:
      return ContentInteractionsApi.getUpvoteContentSignedTransaction(...action.args);

    case actions.GET_FOLLOW_ACCOUNT_SIGNED_TRANSACTION:
      return SocialApi.getFollowAccountSignedTransaction(...action.args);

    case actions.GET_UNFOLLOW_ACCOUNT_SIGNED_TRANSACTION:
      return SocialApi.getUnfollowAccountSignedTransaction(...action.args);

    case actions.GET_FOLLOW_ORGANIZATION_SIGNED_TRANSACTION:
      return SocialApi.getFollowOrganizationSignedTransaction(...action.args);

    case actions.GET_UNFOLLOW_ORGANIZATION_SIGNED_TRANSACTION:
      return SocialApi.getUnfollowOrganizationSignedTransaction(...action.args);

    case actions.GET_TRUST_USER_WITH_AUTO_UPDATE_SIGNED_TRANSACTION:
      return SocialApi.getTrustUserWithAutoUpdateSignedTransaction(...action.args);

    case actions.GET_UNTRUST_USER_WITH_AUTO_UPDATE_SIGNED_TRANSACTION:
      return SocialApi.getUntrustUserWithAutoUpdateSignedTransaction(...action.args);

    case actions.SIGN_CREATE_PUBLICATION_FROM_ORGANIZATION:
      return PublicationsApi.signCreatePublicationFromOrganization(...action.args);

    case actions.SIGN_CREATE_PUBLICATION_FROM_USER:
      return PublicationsApi.signCreatePublicationFromUser(...action.args);

    case actions.SIGN_UPDATE_PUBLICATION_FROM_ORGANIZATION:
      return PublicationsApi.signUpdatePublicationFromOrganization(...action.args);

    case actions.SIGN_UPDATE_PUBLICATION_FROM_USER:
      return PublicationsApi.signUpdatePublicationFromUser(...action.args);

    case actions.SIGN_CREATE_DIRECT_POST_FOR_ACCOUNT:
      return PublicationsApi.signCreateDirectPostForAccount(...action.args);

    case actions.SIGN_CREATE_DIRECT_POST_FOR_ORGANIZATION:
      return PublicationsApi.signCreateDirectPostForOrganization(...action.args);

    case actions.SIGN_UPDATE_DIRECT_POST_FOR_ACCOUNT:
      return PublicationsApi.signUpdateDirectPostForAccount(...action.args);

    case actions.SIGN_UPDATE_DIRECT_POST_FOR_ORGANIZATION:
      return PublicationsApi.signUpdateDirectPostForOrganization(...action.args);

    case actions.SIGN_CREATE_REPOST_POST_FOR_ACCOUNT:
      return PublicationsApi.signCreateRepostPostForAccount(...action.args);

    case actions.SIGN_CREATE_COMMENT_FROM_ORGANIZATION:
      return PublicationsApi.signCreateCommentFromOrganization(...action.args);

    case actions.SIGN_CREATE_COMMENT_FROM_USER:
      return PublicationsApi.signCreateCommentFromUser(...action.args);

    case actions.UPDATE_PROFILE:
      return ContentApi.updateProfile(...action.args);

    case actions.SIGN_CREATE_ORGANIZATION:
      return OrganizationsApi.signCreateOrganization(...action.args);

    case actions.SIGN_UPDATE_ORGANIZATION:
      return OrganizationsApi.signUpdateOrganization(...action.args);

    case actions.STAKE_OR_UNSTAKE_TOKENS:
      return WalletApi.stakeOrUnstakeTokens(...action.args);

    case actions.VOTE_FOR_BLOCK_PRODUCERS:
      return WalletApi.voteForBlockProducers(...action.args);

    case actions.VOTE_FOR_CALCULATOR_NODES:
      return WalletApi.voteForCalculatorNodes(...action.args);

    case actions.SEND_TOKENS:
      return WalletApi.sendTokens(...action.args);

    case actions.BUY_RAM:
      return WalletApi.buyRam(...action.args);

    case actions.SELL_RAM:
      return WalletApi.sellRam(...action.args);

    case actions.CLAIM_EMISSION:
      return WalletApi.claimEmission(...action.args);

    case actions.CREATE_PROFILE_AFTER_REGISTRATION:
      return ContentApi.createProfileAfterRegistration(...action.args);

    case actions.GET_REFERRAL_FROM_USER_SIGNED_TRANSACTION_AS_JSON:
      return SocialApi.getReferralFromUserSignedTransactionAsJson(...action.args);

    case actions.SIGN_UPDATE_COMMENT_FROM_ACCOUNT:
      return PublicationsApi.signUpdateCommentFromAccount(...action.args);

    case actions.SIGN_UPDATE_COMMENT_FROM_ORGANIZATION:
      return PublicationsApi.signUpdateCommentFromOrganization(...action.args);

    case actions.ADD_SOCIAL_PERMISSIONS_TO_PROPOSE_APPROVE_AND_EXECUTE:
      return SocialKeyApi.addSocialPermissionsToProposeApproveAndExecute(...action.args);

    case actions.CREATE_MULTI_SIGNATURE_ACCOUNT:
      return MultiSignatureApi.createMultiSignatureAccount(...action.args);

    case actions.ARE_SOCIAL_MEMBERS_CHANGED:
      return MultiSignatureApi.areSocialMembersChanged(...action.args);

    case actions.CREATE_AND_EXECUTE_PROFILE_UPDATE_AND_SOCIAL_MEMBERS:
      return MultiSignatureApi.createAndExecuteProfileUpdateAndSocialMembers(...action.args);

    case actions.MULTI_SIGN_UPDATE_PROFILE:
      return MultiSignatureApi.updateProfile(...action.args);

    case actions.GET_CREATE_PUBLICATION_FROM_ORGANIZATION_ACTION:
      return ContentPublicationsActionsApi.getCreatePublicationFromOrganizationAction(...action.args);

    case actions.PROPOSE_APPROVE_AND_EXECUTE_BY_PROPOSER:
      return MultiSignatureApi.proposeApproveAndExecuteByProposer(...action.args);

    case actions.GET_UPDATE_PUBLICATION_FROM_ORGANIZATION_ACTION:
      return ContentPublicationsActionsApi.getUpdatePublicationFromOrganizationAction(...action.args);

    case actions.WITHDRAW_TIMELOCKED:
      return WalletApi.withdrawTimeLocked(...action.args);

    case actions.WITHDRAW_ACTIVITYLOCKED:
      return WalletApi.withdrawActivityLocked(...action.args);

    default:
      return null;
  }
});
